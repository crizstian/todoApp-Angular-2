import {Component,Inject} from 'angular2/core';
import {Action,AddTodoAction} from '../logic/Actions';
import {Observer} from 'rxjs/Observer';
import {dispatcher} from '../logic/StateAndDispatcher';

@Component({
  selector: 'add-todo',
  template: `<input #text><button (click)="addTodo(text.value)">Add Todo</button>`
})
export class AddTodo {
  nextId:number = 0;

  constructor(@Inject(dispatcher) private dispatcher: Observer<Action>) {}

  addTodo(value) {
    this.dispatcher.next(new AddTodoAction(""+(this.nextId++), value));
  }
}
