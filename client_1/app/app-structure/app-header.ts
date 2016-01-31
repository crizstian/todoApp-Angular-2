import {Component} from 'angular2/core';

@Component({
  selector    : 'app-header',
  templateUrl : 'app/app-structure/templates/header.html'
})
export class AppHeader{
  logo: string = ' ( Blog ) => Blog.from.CR';
  title: string = 'Todo App';
  github:string = 'Fork Me on Github';
}
