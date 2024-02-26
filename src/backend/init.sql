-- Users table
CREATE TABLE users (
    id serial PRIMARY KEY,
    username varchar NOT NULL UNIQUE,
    created_at timestamp NOT NULL,
    updated_at timestamp NOT NULL,
    password varchar NOT NULL,
    meals_per_day smallint DEFAULT NULL,
    --CHECK (meals_per_day IN (1, 2, 3, 4))
    servings_per_meal smallint DEFAULT NULL,
    --CHECK (servings_per_meal IN (1, 2, 4)),
    max_cooking_minutes smallint DEFAULT NULL,
    weekly_budget decimal DEFAULT NULL -- decimal CHECK (weekly_budget > 0)
);

-- Dietary restrictions table
CREATE TABLE dietary_restrictions (
    id serial PRIMARY KEY,
    name varchar NOT NULL UNIQUE
);
-- User preferences restrictions table
CREATE TABLE user_preferences_restrictions (
    user_id int REFERENCES users (id),
    restriction_id int REFERENCES dietary_restrictions (id),
    PRIMARY KEY (user_id, restriction_id)
);
-- Cuisines table
CREATE TABLE cuisines (
    id serial PRIMARY KEY,
    name varchar NOT NULL UNIQUE
);
-- User preferences cuisines table
CREATE TABLE user_preferences_cuisines (
    user_id int REFERENCES users (id),
    cuisine_id int REFERENCES cuisines (id),
    PRIMARY KEY (user_id, cuisine_id)
);
-- Recipes table
CREATE TABLE recipes (
    id smallint PRIMARY KEY,
    name varchar NOT NULL,
    description text NOT NULL,
    cooking_minutes smallint NOT NULL,
    cost decimal NOT NULL,
    n_steps smallint NOT NULL,
    steps text NOT NULL,
    n_ingredients smallint NOT NULL,
    calories decimal CHECK (calories > 0) NOT NULL,
    total_fat_pdv decimal CHECK (total_fat_pdv > 0) NOT NULL,
    sodium_pdv decimal CHECK (sodium_pdv > 0) NOT NULL,
    protein_pdv decimal CHECK (protein_pdv > 0) NOT NULL,
    saturated_fat_pdv decimal CHECK (saturated_fat_pdv > 0) NOT NULL,
    carbohydrate_pdv decimal CHECK (carbohydrate_pdv > 0) NOT NULL,
    sugar_pdv decimal CHECK (sugar_pdv > 0) NOT NULL,
    cooking_method varchar NOT NULL,
    course varchar NOT NULL,
    difficulty varchar NOT NULL,
    dish varchar NOT NULL,
    equipment varchar NOT NULL,
    event varchar NOT NULL,
    key_ingredient varchar NOT NULL,
    season varchar NOT NULL
);
-- Ingredients table
CREATE TABLE ingredients (
    id serial PRIMARY KEY,
    name VARCHAR NOT NULL,
    quantity decimal CHECK (quantity > 0) NOT NULL,
    unit varchar CHECK (
        unit IN (
            'g',
            'kg',
            'ml',
            'l',
            'oz',
            'lb',
            'tsp',
            'tbsp',
            'cup',
            'pint',
            'quart',
            'gallon',
            'unit'
        ) 
    ),
    price decimal CHECK (price > 0) NOT NULL,
    walmart_item_id varchar NOT NULL UNIQUE
);
-- Recipe ingredients table
CREATE TABLE recipe_ingredients (
    recipe_id INT REFERENCES recipes (id),
    ingredient_id INT REFERENCES ingredients (id),
    label VARCHAR NOT NULL,
    quantity DECIMAL NOT NULL,
    unit VARCHAR NOT NULL,
    PRIMARY KEY (recipe_id, ingredient_id)
);
-- Recipe restrictions table
CREATE TABLE recipe_restrictions (
    recipe_id int REFERENCES recipes (id),
    restriction_id int REFERENCES dietary_restrictions (id),
    PRIMARY KEY (recipe_id, restriction_id)
);
-- Recipe cuisines table
CREATE TABLE recipe_cuisines (
    recipe_id int REFERENCES recipes (id),
    cuisine_id int REFERENCES cuisines (id),
    PRIMARY KEY (recipe_id, cuisine_id)
);
-- Weekly schedules table
CREATE TABLE weekly_schedules (
    id serial PRIMARY KEY,
    user_id int REFERENCES users (id),
    week_start_date date NOT NULL,
    cost decimal NOT NULL
);
-- Scheduled recipes table
CREATE TABLE scheduled_recipes (
    schedule_id int REFERENCES weekly_schedules (id),
    recipe_id int REFERENCES recipes (id),
    cost decimal NOT NULL,
    PRIMARY KEY (schedule_id, recipe_id)
);
