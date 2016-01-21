## ToDo App using Angular 2 beta with the MEAN Stack

add the dependencies from the `package.json` file with `npm i --save` in `server folder` as well as in the `client folder`.

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

in the terminal run `gulp` will start the server at `http//:localhost:3000`

### To Run the client

#### Aproach 1

the following steps are:

- you have to move to the folder client_1

1.- install dependencies `npm i && bower i`

2.- run `gulp` it will compile, copy and deploy a `dist folder` for the developed App

3.- open a browser and go to `http://localhost:3000`

still in development process...
