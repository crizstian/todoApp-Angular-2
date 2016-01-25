## ToDo App using Angular 2 beta with the MEAN Stack

### To run the ToDo App

- `clone the githube repo`

- install the dependencies for the both projects the server and the client both of them has it's own package.json file

### Install MongoDB with Homebrew or Download it from the official page

For Mac/Linux first create the folder where mongo is going to save the collections

- `mkdir -p /data/db`

Set permissions for the data directory

- `sudo chmod 0755 /data/db`

- `sudo chown $USER /data/db`

Run MongoDB

`iTerm buffer 1: mongod`

`iTerm buffer 2: mongo`


- run the server in one terminal

- run the client in other terminal

- both projects has it's own `gulp file` with just running `gulp` in the terminal.

- Additional you can run protractor tests running the `gulpfile` located in the `e2e folder`.
