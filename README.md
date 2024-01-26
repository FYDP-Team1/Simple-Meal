## Development workflow for developers

Pull the source code [Simple Meal](https://github.com/FYDP-Team1/Simple-Meal)

If pulled for the first time or the package.json changed run

`docker-compose build`

Then, run the following command to start the environment.

`docker-compose up -d`

To see the logs of your app

`docker-compose logs -f web`

To see and follow the logs of your tests

`docker-compose logs -f test`

If you need to install any npm package.

`docker-compose exec web npm install pacakge-name`

stop the containers

`docker-compose down`