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
      `SELECT users.meals_per_day, users.weekly_budget, users.max_cooking_minutes, json_agg(DISTINCT user_preferences_restrictions.restriction_id) AS restrictions, json_agg(DISTINCT user_preferences_cuisines.cuisine_id) AS userPreferredCuisines
        FROM users
        LEFT JOIN user_preferences_restrictions ON users.id = user_preferences_restrictions.user_id
        LEFT JOIN user_preferences_cuisines ON users.id = user_preferences_cuisines.user_id
        WHERE users.id = $1
        GROUP BY users.id`,
      [userId]
    );

    return userData;
  } catch (error) {
    console.error("Error retrieving user preferences:", error);
    throw error;
  }
};

// Function to filter recipes based on dietary restrictions
const filterRecipes = async (restrictions) => {
  try {
    const filteredRecipes = await db.any(
      `SELECT DISTINCT ON (recipes.id) recipes.id, json_agg(DISTINCT recipe_cuisines.cuisine_id) AS cuisines, recipes.cost, recipes.cooking_minutes
        FROM recipes
        JOIN recipe_cuisines ON recipes.id = recipe_cuisines.recipe_id
        LEFT JOIN recipe_restrictions ON recipes.id = recipe_restrictions.recipe_id
        WHERE recipe_restrictions.restriction_id NOT IN ($1:list)
        GROUP BY recipes.id
        ORDER BY recipes.id, recipes.cost ASC`,
      [restrictions]
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
  meals_per_day,
  weeklyBudget,
  maxCookingMinutes,
  userPreferredCuisines
) => {
  const avgCost = meals_per_day * weeklyBudget / 7;

  for (let recipe of recipes) {
    // Assign weights based on cost
    let costWeight;
    const costDiff = Math.abs(recipe.cost - avgCost);
    if (costDiff < 0.1 * avgCost) {
      costWeight = 5;
    } else if (costDiff < 0.2 * avgCost) {
      costWeight = 2;
    }

    // Assign weights based on cooking minutes
    let cookingTimeWeight;
    const timeDiff = recipe.cooking_minutes - maxCookingMinutes;
    if (timeDiff > 30) {
      cookingTimeWeight = 0;
    } else if (timeDiff > 0) {
      cookingTimeWeight = 1;
    } else if (timeDiff < 10) {
      cookingTimeWeight = 4;
    } else {
      cookingTimeWeight = 3;
    }

    // Calculate cuisine weight
    let cuisineWeight = 0;
    const recipeCuisines = recipe.cuisines;
    for (const cuisine of userPreferredCuisines) {
      if (recipeCuisines.includes(cuisine)) {
        cuisineWeight += 5;
      }
    }

    // Calculate total weight for the recipe
    const totalWeight = costWeight + cookingTimeWeight + cuisineWeight;

    // Assign the total weight to the recipe
    recipe.weight = totalWeight;
  }

  // Sort recipes by weight in descending order
  recipes.sort((a, b) => b.weight - a.weight);

  // Return top N recipes, where N = number of meals per week
  if (recipes.length > 7 * meals_per_day) {
    return recipes.slice(0, 7 * meals_per_day);
  }
  return recipes;
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
const generateWeeklySchedule = async (recipes, mealsPerDay, userId) => {
    const weeklySchedule = {
        Mon: [],
        Tue: [],
        Wed: [],
        Thu: [],
        Fri: [],
        Sat: [],
        Sun: [],
    };

    // Calculate the start date of the current week
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const daysToMonday = currentDay === 0 ? 6 : currentDay - 1;
    const mondayDate = new Date(currentDate.setDate(currentDate.getDate() - daysToMonday));
    const weekStartDate = mondayDate.toISOString().split('T')[0];

    // Pad and Truncate the recipes array to ensure only enough recipes for the week
    while (recipes.length < 7 * mealsPerDay) {
        recipes = recipes.concat(recipes);
    }
    recipes = recipes.slice(0, 7 * mealsPerDay);

    const daysOfWeek = Object.keys(weeklySchedule);
    let total = 0;

    // Sample the recipes for each day of the week
    for (const day of daysOfWeek) {
      const recipesForDay = [];
      while (recipesForDay.length < mealsPerDay) {
        const randomIndex = Math.floor(Math.random() * recipes.length);
        const randomRecipe = recipes[randomIndex];
        if (!recipesForDay.includes(randomRecipe)) {
          total += randomRecipe.cost;
          recipesForDay.push(randomRecipe);
          recipes.splice(randomIndex, 1); // Remove the selected recipe from the list
        }
      }
      weeklySchedule[day] = recipesForDay;
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
