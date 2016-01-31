import {Component,Input,Output,EventEmitter} from 'angular2/core';

@Component({
  selector: 'todo',
  template: `<span (click)="toggle.next()" [style.textDecoration]="textEffect">
               {{text}}
             </span>`
})
export class Todo {
  @Input() text: string;
  @Input() completed: boolean;
  @Output() toggle = new EventEmitter();

  get textEffect() { return this.completed ? 'line-through' : 'none'; }
}
