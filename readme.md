## ToDo App using Angular 2 beta with the MEAN Stack

add the dependencies from the `package.json` file with `npm i --save` to our project.

### Server config
Things to notice

Line 5 :  MongoDB instance configured it with Mongojs.

Line 8 :  Endpoint to get all todos

Line 15 : created chainable route handlers for a route path, because the path is specified at a single location,

					creating modular routes is helpful, as is reducing redundancy and typos.

Line 17 : Endpoint to get one todo based on the id provided

Line 31 : Endpoint to save a todo

Line 50 : Endpoint to update a todo

Line 79 : Endpoint to delete a todo

### To Run the server

in the terminal run `npm start` will start the server at `http//:localhost:3000`

### To Run the client

still in development process...
