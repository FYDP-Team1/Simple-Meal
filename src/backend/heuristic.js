const pgp = require("pg-promise")();

const db = pgp({
  host: "simple-meal-db",
  port: 5432,
  database: "simple_meal",
  user: "postgres",
  password: "Maan_2000",
});

// Function to get the index of the day of the week
const getDayIndex = (day) => {
  switch (day) {
    case "Mon":
      return 1;
    case "Tue":
      return 2;
    case "Wed":
      return 3;
    case "Thu":
      return 4;
    case "Fri":
      return 5;
    case "Sat":
      return 6;
    case "Sun":
      return 7;
    default:
      throw new Error("Invalid day");
  }
};

// Function to retrieve user preferences
const getUserPreferences = async (userId) => {
  try {
    const userData = await db.one(
      "SELECT meals_per_day, weekly_budget, max_cooking_minutes FROM users WHERE id = $1",
      [userId]
    );

    const restrictionIds = await db.map(
      "SELECT restriction_id FROM user_preferences_restrictions WHERE user_id = $1",
      [userId],
      (row) => row.restriction_id
    );

    const userPreferredCuisines = await getUserPreferredCuisines(userId);

    return { ...userData, restrictionIds, userPreferredCuisines };
  } catch (error) {
    console.error("Error retrieving user preferences:", error);
    throw error;
  }
};

// Function to retrieve user preferred cuisines
const getUserPreferredCuisines = async (userId) => {
  try {
    const userPreferredCuisines = await db.map(
      "SELECT cuisines.name FROM cuisines INNER JOIN user_preferences_cuisines ON cuisines.id = user_preferences_cuisines.cuisine_id WHERE user_preferences_cuisines.user_id = $1",
      [userId],
      (row) => row.name
    );
    return userPreferredCuisines;
  } catch (error) {
    console.error("Error retrieving user preferred cuisines:", error);
    throw error;
  }
};

// Function to filter recipes based on dietary restrictions
const filterRecipes = async (restrictionIds) => {
  try {
    const filteredRecipes = await db.any(
      `SELECT recipes.id, cuisines.name AS cuisine, recipes.cost, recipes.cooking_minutes
         FROM recipes
         JOIN recipe_cuisines ON recipes.id = recipe_cuisines.recipe_id
         JOIN cuisines ON recipe_cuisines.cuisine_id = cuisines.id
         LEFT JOIN recipe_restrictions ON recipes.id = recipe_restrictions.recipe_id
         WHERE recipe_restrictions.restriction_id NOT IN ($1:list)
         ORDER BY recipes.cost ASC`,
      [restrictionIds]
    );
    return filteredRecipes;
  } catch (error) {
    console.error("Error filtering recipes:", error);
    throw error;
  }
};

// Function to calculate recipe weights
const calculateRecipeWeights = async (
  recipes,
  userId,
  weeklyBudget,
  maxCookingMinutes,
  userPreferredCuisines
) => {
  for (let recipe of recipes) {
    // Assign weights based on cost
    const costWeight = 10 - Math.floor((recipe.cost / weeklyBudget) * 10);

    // Assign weights based on cooking minutes
    let cookingTimeWeight;
    if (recipe.cooking_minutes === maxCookingMinutes) {
      cookingTimeWeight = 3;
    } else if (recipe.cooking_minutes < maxCookingMinutes) {
      cookingTimeWeight = 4;
    } else if (recipe.cooking_minutes > maxCookingMinutes) {
      cookingTimeWeight = 2;
    } else {
      cookingTimeWeight = 0;
    }

    // Calculate cuisine weight
    let cuisineWeight = 0;
    for (const cuisineName of userPreferredCuisines) {
      const cuisineId = await getCuisineIdByName(cuisineName);
      if (cuisineId === recipe.cuisine_id) {
        cuisineWeight = 5;
        break;
      }
    }

    // Calculate total weight for the recipe
    const totalWeight = costWeight + cookingTimeWeight + cuisineWeight;

    // Assign the total weight to the recipe
    recipe.weight = totalWeight;
  }
};

// Function to get cuisine ID by name
const getCuisineIdByName = async (cuisineName) => {
  try {
    const { id } = await db.one("SELECT id FROM cuisines WHERE name = $1", [
      cuisineName,
    ]);
    return id;
  } catch (error) {
    console.error("Error retrieving cuisine ID:", error);
    throw error;
  }
};
// Function to generate weekly schedule and insert into database
const generateWeeklySchedule = async (recipes, mealsPerDay, userId, weekStartDate, cost) => {
    const weeklySchedule = {
        Mon: [],
        Tue: [],
        Wed: [],
        Thu: [],
        Fri: [],
        Sat: [],
        Sun: [],
    };

    const daysOfWeek = Object.keys(weeklySchedule);
    let recipesIndex = 0;
    for (let i = 0; i < daysOfWeek.length; i++) {
        const day = daysOfWeek[i];
        for (let j = 0; j < mealsPerDay; j++) {
            weeklySchedule[day].push(recipes[recipesIndex]);
            recipesIndex = (recipesIndex + 1) % recipes.length;
        }
    }

    try {

        for (const day of daysOfWeek) {

            for (const recipe of weeklySchedule[day]) {
                                    // Insert into weekly_schedules table
        const weekScheduleQuery = `
        INSERT INTO weekly_schedules (user_id, week_start_date, cost)
        VALUES ($1, $2, $3)
        RETURNING id
        `;
        const { id: scheduleId } = await db.one(weekScheduleQuery, [userId, weekStartDate, cost]);

        // Insert into scheduled_recipes table
        const scheduledRecipesQuery = `
            INSERT INTO scheduled_recipes (schedule_id, recipe_id, cost, day)
            VALUES ($1, $2, $3, $4)
            `;
                await db.none(scheduledRecipesQuery, [scheduleId, recipe.id, recipe.cost, getDayIndex(day)]);
            }
        }

    } catch (error) {
        console.error("Error inserting weekly schedule:", error);
        throw error;
    }
    
    return weeklySchedule;
};


module.exports = {
  getDayIndex,
  getUserPreferences,
  getUserPreferredCuisines,
  filterRecipes,
  calculateRecipeWeights,
  getCuisineIdByName,
  generateWeeklySchedule,
};
