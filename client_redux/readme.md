### To Run the client

#### Aproach 2 (Using Redux Pattern)

the following steps are:

1.- install dependencies `npm i && bower i from the package.json file`.

2.- run `gulp` it will compile, copy and deploy a `dist folder` for the developed App

3.- open a browser and go to `http://localhost:3000`

#### Jasmine for Unit Test

Replace the next code in the index.html.

<code>

System.import('app/boot') -> to System.import('app/test/todo_rx.spec')

</code>

then gulp will recompile the code and will show the jasmine tests.

open a browser and go to `http://localhost:3000` to se the results
