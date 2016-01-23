import {Component, Input} from 'angular2/core';

@Component({
  selector : 'todo-item',
  template : `
              <style>
                .completed{
                  text-decoration: line-through;
                }
              </style>
              <div>
                <input type="checkbox" (click)="todo.toggle()"/>
                <span [ngClass]="todo.isCompleted">{{todo.text}}</span>
              </div>`
})
export class TodoItem{
  @Input() todo;
}
