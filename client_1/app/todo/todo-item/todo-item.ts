import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector : 'todo-item',
  template : `
              <style>
                .completed{
                  text-decoration: line-through;
                }
              </style>
              <div>
                <input type="checkbox" (click)="toggle.emit(todo)"/>
                <span [ngClass]="todo.isCompleted">{{todo.text}}</span>
              </div>`
})
export class TodoItem{
  @Input() todo;
  @Output() toggle = new EventEmitter();
}
