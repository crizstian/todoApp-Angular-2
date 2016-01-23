import {Component}   from 'angular2/core';
import {TodoService} from '../todoServcie/todoService.service';
import {TodoInput}   from './todo-input/todo-input';
import {TodoList}    from './todo-list/todo-list';

@Component({
  selector    : 'todo-app',
  directives  : [TodoInput,TodoList],
  templateUrl : 'app/todo/todo.html',
  providers   : [TodoService]
})
export class TodoComponent {

  public title: string = 'M.E.A.N Todo App with Angular 2';

}
