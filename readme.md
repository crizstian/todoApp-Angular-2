## ToDo App using Angular 2 beta with the MEAN Stack

add the dependencies from the `package.json` file with `npm i --save` in `server folder` as well as in the `client folder`.

### Install MongoDB with Homebrew or Download it from the official page

`mkdir -p /data/db`

Set permissions for the data directory

Ensure that user account running mongod has correct permissions for the directory:

`sudo chmod 0755 /data/db`

`sudo chown $USER /data/db`

Run MongoDB!

`iTerm buffer 1: mongod`

`iTerm buffer 2: mongo`

### Server config
Things to notice

- Enabaling Cors that let Angular to connect with the API

- MongoDB instance configured it with Mongojs.

- Endpoint to get all todos

- Endpoint to get one todo based on the id provided

- Endpoint to save a todo

- Endpoint to update a todo

- Endpoint to delete a todo

### To Run the server

in the terminal run `gulp` will start the server at `http://localhost:8000`

### To Run the client

#### Aproach 1 (not using TSD file's)

the following steps are:

- you have to move to the folder client_1

1.- install dependencies `npm i && bower i`

2.- run `gulp` it will compile, copy and deploy a `dist folder` for the developed App

3.- open a browser and go to `http://localhost:3000`

### Run E2E Tests to Angular 2 with Gulp + Protractor

the following steps are:

- you have to get up and running the ToDo App.

1.- `cd to e2e folder`

2.- run `gulp` it will compile, update the web driver, and run the tests for you.

3.- check the results in the terminal.
