## Development workflow for developers

Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)

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

## VS Code

### Setup

Install the extensions required to connect to the container through VSCode by following these steps:

1. Open the workspace folder in VS Code.
2. Go to the Extensions view (Ctrl+Shift+X).
3. In the search bar, type @recommended:workspace.
4. This will filter extensions recommended for the current workspace.
5. Click the "Install" button next to each extension, or click the cloud icon at the top to install all recommended extensions at once.

### Connect to container

1. Open the terminal in VS Code and start the container using the instructions above.
2. Once the container is running, click the "Open Remote Window" button on the bottom-left of the window.
3. Select "Attach to running container".
4. Select the container that you just started.
5. Start coding as you would normally do. The React app will be running in the background, you can reach is via `http://localhost:[port]`.