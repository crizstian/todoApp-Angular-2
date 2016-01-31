import {Injectable} from 'angular2/core';
import {AppState,Todo} from './AppState';
import {Action,AddTodoAction,ToggleTodoAction,SetVisibilityFilter} from './Actions';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/subject/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/zip';

@Injectable()
export class Reducer{

  

}//end of class
