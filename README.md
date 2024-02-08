## Development workflow for developers

Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)

Pull the source code [Simple Meal](https://github.com/FYDP-Team1/Simple-Meal)

### Build 

If pulled for the first time or the package.json changed run

`docker compose build --pull --no-cache`

### Start

Then, run the following command to start the environment.

`docker compose up -d`

open your web browser and navigate to the app

[localhost:3000](http://localhost:3000)

### Logs

view the logs from the app continer

`docker compose logs -f app`

view the logs from the postgres db continer

`docker compose logs -f db`

### Terminal

connect to the terminal inside the db container

```
docker compose exec -it bash
psql -d simple_meal -U postgres
```

### Stop

stop the containers

`docker compose down`

stop the containers and remove the postgres data

`docker compose down -v postgres_data`

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
