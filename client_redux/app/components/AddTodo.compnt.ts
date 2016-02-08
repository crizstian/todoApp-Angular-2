import {Component,Inject} from 'angular2/core';
import {Action,AddTodoAction} from '../logic/Actions';
import {Observer} from 'rxjs/Observer';
import {dispatcher} from '../logic/StateAndDispatcher';
import {TodoService} from '../services/TodoService.service';
import {Logger} from '../services/Logger.service';

@Component({
  selector: 'add-todo',
  template: `<form (submit)="onSubmit()">
                <div class="input-field col s6">
                  <input id="add_todo" type="text" class="validate" [(ngModel)]="todo.text"/>
                  <label for="add_todo">Add new todo</label>
                </div>
              </form>`
})
export class AddTodo {

  todo = new AddTodoAction('','');

  constructor(@Inject(dispatcher) private dispatcher: Observer<Action>,
              private _todoService:TodoService, private _logger:Logger) {}

  onSubmit(){
    this._todoService.save(this.todo)
        .subscribe(
           data => this.dispatcher.next(new AddTodoAction(data._id,data.text,data.isCompleted)),
           err  => this._logger.log(err),
           ()   => {
            this.todo = new AddTodoAction('','');
            this._logger.log('Todo Added');
        });
    }
  }
