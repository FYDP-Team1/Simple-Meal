#!/bin/bash

# Unpack the images
echo "Starting unpacking images..."
mkdir -vp public/recipe_images
tar -xf recipe_images.tar -C public/recipe_images
echo "Done unpacking images."

# Start the application
npm start
