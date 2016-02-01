import {Component,Output,EventEmitter} from 'angular2/core';

@Component({
  selector : 'todo-search',
  template : `
              <div class="input-field col s6">
                <input id="search_todo" type="text" class="validate" #input (input)="search.emit(input.value)"/>
                <label for="search_todo">Search Todo</label>
              </div>
             `
})
export class TodoSearch{
  @Output() search = new EventEmitter();

  ngOnInit(){
    this.search.emit('');
  }
}
