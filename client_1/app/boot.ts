import {bootstrap}        from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent}     from './app.component';
import {HTTP_PROVIDERS}   from 'angular2/http';
import {TodoService}      from './todoServcie/todoService.service';

bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, TodoService])
        .catch(err => console.error(err));
