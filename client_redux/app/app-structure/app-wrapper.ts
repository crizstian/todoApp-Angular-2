import {Component,ElementRef}                 from 'angular2/core';
import {TodoApp}             from '../components/TodoApp.compnt';
import {AppFooter}                 from './app-footer';
import {AppHeader}                 from './app-header';
import {stateAndDispatcher} from '../logic/StateAndDispatcher';
import {TodoService} from '../services/TodoService.service';
import {Logger} from '../services/Logger.service';

declare var jQuery:any;
declare var materilize:any;

@Component({
  selector   : 'my-app',
  template   : `<app-header></app-header>
                <todo-app></todo-app>
                <app-footer></app-footer>
              `,
  directives: [AppHeader,TodoApp,AppFooter],
  providers: [stateAndDispatcher,TodoService,Logger]
})
export class AppWrapper {

  elementRef: ElementRef;

  constructor(elementRef: ElementRef) {
        this.elementRef = elementRef;
  }

  ngOnInit(){
    jQuery(this.elementRef.nativeElement).ready(function() {
      jQuery(".button-collapse").sideNav();
    });
  }
}
