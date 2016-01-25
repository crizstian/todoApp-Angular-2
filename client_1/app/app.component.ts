import {Component}                 from 'angular2/core';
import {RouteConfig, RouterOutlet,
        ROUTER_DIRECTIVES}         from 'angular2/router';
import {AppWrapper}                from './app-structure/app-wrapper';

@Component({
  selector   : 'my-app',
  template   : `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES, RouterOutlet]
})
@RouteConfig([
  {path: '/', name: 'Home', component: AppWrapper , useAsDefault: true }
])
export class AppComponent {}
