import {Component} from 'angular2/core';
import {AddTodo} from './AddTodo.compnt';
import {TodoList} from './TodoList.compnt';
import {Footer} from './FilterLink.compnt';
import {stateAndDispatcher} from '../logic/StateAndDispatcher';


@Component({
  selector: 'ng-demo',
  template: `
    <add-todo></add-todo>
    <todo-list></todo-list>
    <footer></footer>
  `,
  directives: [AddTodo, TodoList, Footer],
  providers: [stateAndDispatcher]
})
export class TodoApp {}
