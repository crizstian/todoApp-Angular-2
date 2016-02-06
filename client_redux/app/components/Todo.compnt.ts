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
                <input type="checkbox" id="index" [checked]="todo.isCompleted==='completed' ? true : false" (click)="toggle.emit(todo)" />
                <label for="index" [ngClass]="todo.isCompleted">{{todo.text}}</label>
              </div>`
})
export class Todo{
  @Input() index;
  @Input() todo;
  @Output() toggle = new EventEmitter();

}
