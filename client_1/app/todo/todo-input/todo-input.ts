import {Component}   from 'angular2/core';
import {TodoService} from '../../todoServcie/todoService.service';
import {Todo}        from '../todo-model/todo-model';

@Component({
  selector : 'todo-input',
  template : `<form (submit)="onSubmit()">
                <input type="text" placeholder="add a todo" [(ngModel)]="todo.text">
              </form>
  `
})
export class TodoInput{

  todo = new Todo();

  constructor(public todoService: TodoService) { }

  onSubmit(){
    this.todoService.save(JSON.stringify(this.todo))
        .subscribe(
           data => this.todoService.addTodo(this.todo),
           err  => console.log(err),
           ()   => this.todo = new Todo());
  }

}
