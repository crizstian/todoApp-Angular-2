import {Component,Inject,Input} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {AppState} from '../logic/AppState';
import {Observer} from 'rxjs/Observer';
import {Action,SetVisibilityFilter} from '../logic/Actions';
import {dispatcher,state} from '../logic/StateAndDispatcher';

@Component({
  selector: 'filter-link',
  template: `<a href="#" (click)="setVisibilityFilter()"
               [style.textDecoration]="textEffect">{{filter}}</a>`
})
export class FilterLink {
  @Input() filter: string;

  constructor(@Inject(dispatcher) private dispatcher: Observer<Action>,
              @Inject(state) private state: Observable<AppState>){}

  textEffect() {
    return this.state.map(s => s.visibilityFilter === this.filter ? 'underline' : 'none');
  }

  setVisibilityFilter() {
    this.dispatcher.next(new SetVisibilityFilter(this.filter));
  }
}

@Component({
  selector: 'footer',
  template: `<filter-link filter="SHOW_ALL">All</filter-link>
             <filter-link filter="SHOW_ACTIVE">Active</filter-link>
             <filter-link filter="SHOW_COMPLETED">Completed</filter-link>`,
  directives: [FilterLink]
})
export class Footer {}
