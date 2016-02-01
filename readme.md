## Todo App using Angular 2 beta with the MEAN Stack

### Structure of the project

#### Server (Partial working... 2 of 5 endpoints)

- For more details, go to the server folder and check it's own readme

#### Client

#### Client_1

- The Client version 1 is developed with normal pattern.

- For more details, go to the client folder and check it's own readme

#### Client_redux

- The Client version 2 is developed with redux pattern.

Following the <code>
<a href="http://victorsavkin.com/post/137821436516/managing-state-in-angular-2-applications" tagret="_blank">Victor Savkin blog post</a>
</code>

- For more details, go to the client_redux folder and check it's own readme


#### E2E Tests with Protractor

- go to the E2E folder and check it's own readme

#### Development Requirements
<code>
<table>
<tr>
<th>Dependency</td><td>OS X Installation </th>
</tr>
<tr>
<td>node.js </td><td>`brew install nodejs` </td>
</tr>
<tr>
<td>gulp </td><td>`npm install -g gulp` </td>
</tr>
</table>
</code>

#### To Run the app

- `clone the github repo`

- install the dependencies for the both projects the server and the client

  both of them has it's own `package.json` file and `gulpfile`.

### Aditional MongoDB Instalation

For Mac/Linux first create the folder where mongo is going to save the collections

- `mkdir -p /data/db`

Set permissions for the data directory

- `sudo chmod 0755 /data/db`

- `sudo chown $USER /data/db`

Run MongoDB

`iTerm buffer 1: mongod`

`iTerm buffer 2: mongo`
