import {Component} from 'angular2/core';

@Component({
  selector    : 'app-header',
  templateUrl : 'app/app-structure/templates/header.html'
})
export class AppHeader{
  logo: string = 'M.E.A2.N App';
  title: string = 'Todo App';
  github:string = 'Fork Github';
}
