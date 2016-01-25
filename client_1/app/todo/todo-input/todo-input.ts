import {Component}   from 'angular2/core';
import {TodoService} from '../../todoServcie/todoService.service';
import {Todo}        from '../todo-model/todo-model';

@Component({
  selector : 'todo-input',
  template : `<form (submit)="onSubmit()">
                <div class="input-field col s6">
                  <input id="add_todo" type="text" class="validate" [(ngModel)]="todo.text"/>
                  <label for="add_todo">Add new todo</label>
                </div>
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
