import {Component}   from 'angular2/core';
import {TodoService} from '../todoServcie/todoService.service';
import {TodoInput}   from './todo-input/todo-input';
import {TodoSearch}   from './todo-input/todo-search';
import {TodoList}    from './todo-list/todo-list';
import {TodoSelect}  from './todo-selector/todo-selector';

@Component({
  selector    : 'todo-app',
  directives  : [TodoInput,TodoList,TodoSelect,TodoSearch],
  templateUrl : 'app/todo/todo.html',
  providers   : [TodoService]
})
export class TodoComponent {

  public title: string = 'M.E.A.N Todo App with Angular 2';

}
