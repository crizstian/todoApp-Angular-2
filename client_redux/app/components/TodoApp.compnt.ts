import {Component} from 'angular2/core';
import {AddTodo} from './AddTodo.compnt';
import {TodoList} from './TodoList.compnt';
import {Footer} from './FilterLink.compnt';
import {TodoSelect} from './todo-selector';
import {TodoSearch} from './todo-search';

@Component({
  selector: 'todo-app',
  directives: [AddTodo, TodoList, Footer,TodoSelect,TodoSearch],
  templateUrl : 'app/templates/todo.html'
})
export class TodoApp {}
