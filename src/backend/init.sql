-- Users table
CREATE    TABLE users (
          id serial PRIMARY KEY,
          username varchar UNIQUE,
          created_at timestamp,
          updated_at timestamp,
          password varchar,
          meals_per_day smallint CHECK (meals_per_day IN (1, 2, 3, 4)),
          servings_per_meal smallint CHECK (servings_per_meal IN (1, 2, 4)),
          max_cooking_minutes smallint,
          weekly_budget decimal CHECK (weekly_budget > 0)
          );

-- Dietary restrictions table
CREATE    TABLE dietary_restrictions (id serial PRIMARY KEY, name varchar);

-- User preferences restrictions table
CREATE    TABLE user_preferences_restrictions (
          user_id int REFERENCES users (id),
          restriction_id int REFERENCES dietary_restrictions (id),
          PRIMARY KEY (user_id, restriction_id)
          );

-- Cuisines table
CREATE    TABLE cuisines (id serial PRIMARY KEY, name varchar);

-- User preferences cuisines table
CREATE    TABLE user_preferences_cuisines (
          user_id int REFERENCES users (id),
          cuisine_id int REFERENCES cuisines (id),
          PRIMARY KEY (user_id, cuisine_id)
          );

-- Recipes table
CREATE    TABLE recipes (
          id serial PRIMARY KEY,
          name varchar,
          description text,
          cooking_minutes smallint,
          cost decimal,
          n_steps smallint,
          steps text,
          n_ingredients smallint,
          calories decimal,
          total_fat_pdv decimal,
          sodium_pdv decimal,
          protein_pdv decimal,
          saturated_fat_pdv decimal,
          carbohydrate_pdv decimal,
          cooking_method varchar,
          course varchar,
          difficulty varchar,
          dish varchar,
          equipment varchar,
          event varchar,
          key_ingredient varchar,
          season varchar,
          sugar_pdv decimal
          );

-- Ingredients table
CREATE    TABLE ingredients (
          id serial PRIMARY KEY,
          name VARCHAR,
          unit_quantity decimal,
          unit_label varchar,
          unit_price decimal,
          walmart_item_id varchar,
          PRIMARY KEY (id),
          );

-- Recipe ingredients table
CREATE    TABLE recipe_ingredients (
          recipe_id INT REFERENCES recipes (id),
          ingredient_id INT REFERENCES ingredients (id),
          quantity_multiplier DECIMAL,
          PRIMARY KEY (recipe_id, ingredient_id)
          );

-- Recipe restrictions table
CREATE    TABLE recipe_restrictions (
          recipe_id int REFERENCES recipes (id),
          restriction_id int REFERENCES dietary_restrictions (id),
          PRIMARY KEY (recipe_id, restriction_id)
          );

-- Recipe cuisines table
CREATE    TABLE recipe_cuisines (
          recipe_id int REFERENCES recipes (id),
          cuisine_id int REFERENCES cuisines (id),
          PRIMARY KEY (recipe_id, cuisine_id)
          );

-- Weekly schedules table
CREATE    TABLE weekly_schedules (
          id serial PRIMARY KEY,
          user_id int REFERENCES users (id),
          week_start_date date,
          cost decimal
          );

-- Scheduled recipes table
CREATE    TABLE scheduled_recipes (
          schedule_id int REFERENCES weekly_schedules (id),
          recipe_id int REFERENCES recipes (id),
          cost decimal,
          PRIMARY KEY (schedule_id, recipe_id)
          );