#!/bin/bash

# Unpack the images
echo "Starting unpacking images..."
tar -xf recipe_images.tar -C public/recipe_images
echo "Done unpacking images."

# Start the application
dumb-init npm start
