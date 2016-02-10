import {Component,Output,EventEmitter} from 'angular2/core';

@Component({
  selector : 'status-select',
  template : `
            <label>Search Todo Type</label>
            <div class="input-field col s12">
              <select [(ngModel)]="stat" class="browser-default" #sel (change)="select.emit(sel.value)">
                <option value="" disabled selected>Choose your option</option>
                <option *ngFor="#status of statuses">{{status}}</option>
              </select>
            </div>`
})
export class TodoSelect{

  @Output() select = new EventEmitter();
  statuses:string[] = ['started','completed','all'];
  stat:string = 'all';

  ngOnInit(){
    this.select.emit(this.stat);
  }
}
