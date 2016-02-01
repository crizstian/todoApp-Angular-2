import {Component,Output,EventEmitter,OnInit} from 'angular2/core';

@Component({
  selector : 'status-select',
  template : `
            <label>Search Todo Type</label>
            <div class="input-field col s12">
              <select class="browser-default" #sel (change)="select.emit(sel.value)">
                <option value="" disabled selected>Choose your option</option>
                <option *ngFor="#status of statuses">{{status}}</option>
              </select>
            </div>`
})
export class TodoSelect implements OnInit{

  @Output() select = new EventEmitter();
  statuses = ['started','completed','all'];

  ngOnInit(){
    this.select.emit(this.statuses[0]);
  }
}
