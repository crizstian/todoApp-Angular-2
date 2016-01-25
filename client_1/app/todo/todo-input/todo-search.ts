import {Component,Output,EventEmitter} from 'angular2/core';

@Component({
  selector : 'todo-search',
  template : `
              <br/>
              <span>Todo Search</span>
              <input #input (input)="search.emit(input.value)"/>
             `
})
export class TodoSearch{
  @Output() search = new EventEmitter();

  ngOnInit(){
    this.search.emit('');
  }
}
