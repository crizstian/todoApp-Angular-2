import {Component,Output,EventEmitter,OnInit} from 'angular2/core';

@Component({
  selector : 'status-select',
  template : `<select #sel (change)="select.emit(sel.value)">
                <option *ngFor="#status of statuses">
                  {{status}}
                </option>
              </select>`
})
export class TodoSelect implements OnInit{

  @Output() select = new EventEmitter();
  statuses = ['started','completed'];

  ngOnInit(){
    this.select.emit(this.statuses[0]);
  }
}
