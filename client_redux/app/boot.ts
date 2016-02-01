import {bootstrap}        from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS}   from 'angular2/http';
import {AppWrapper}       from './app-structure/app-wrapper';
import {enableProdMode}   from 'angular2/core';

enableProdMode();
bootstrap(AppWrapper, [HTTP_PROVIDERS, ROUTER_PROVIDERS])
        .catch(err => console.error(err));
