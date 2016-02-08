### Server config

Things to notice

- Enabaling Cors that let Angular to connect with the REST API in this Server.

- MongoDB instance configured with Mongoose.

- Using Wagner for dependecy injection in the express server.

<table>
<tr>
<th>Endpoint</td><td>Description </th>
</tr>
<tr>
<td>Method: Get - `/api/v1/todos` </td><td>Endpoint to get all todos </td>
</tr>
<tr>
<td>Method: Post - `/api/v1/todo/:id` </td><td>Endpoint to save a todo </td>
</tr>
<tr>
<td>Method: Get - `/api/v1/todo/:id` </td><td>Endpoint to get one todo based on the id provided </td>
</tr>
<tr>
<td>Method: Put - `/api/v1/todo/:id` </td><td>Endpoint to update a todo </td>
</tr>
<tr>
<td>Method: Delete - `/api/v1/todo/:id` </td><td>Endpoint to delete a todo </td>
</tr>
</table>

### To Run the server

- install the dependencies with `npm i --save from the package.json file`.

in the terminal run `gulp` will start the server at `http://localhost:8000`
