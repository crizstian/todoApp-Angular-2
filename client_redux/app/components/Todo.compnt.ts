import {Component,Input,Output,EventEmitter} from 'angular2/core';

@Component({
  selector : 'todo-item',
  template : `
              <style>
                .completed{
                  text-decoration: line-through;
                }
              </style>
              <div>
                <input
                  type="checkbox"
                  id="index"
                  [checked]="todo.isCompleted==='completed' ? true : false"
                  (click)="toggle.emit(todo)"
                />
                <label for="index" [ngClass]="todo.isCompleted">{{todo.text}}</label>
                <a
                  (click)="delete.emit(todo._id)" 
                  class="btn-floating btn-small waves-effect waves-light red">
                    <i class="material-icons">-</i>
                </a>
              </div>`
})
export class Todo{
  @Input() index;
  @Input() todo;
  @Output() toggle = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();

}
