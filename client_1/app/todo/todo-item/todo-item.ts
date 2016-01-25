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
                <input type="checkbox" id="test5" (click)="toggle.emit(todo)" />
                <label for="test5"[ngClass]="todo.isCompleted">{{todo.text}}</label>
              </div>`
})
export class TodoItem{
  @Input() todo;
  @Output() toggle = new EventEmitter();
}
