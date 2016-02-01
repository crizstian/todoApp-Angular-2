import {Component,Inject,Input} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {Todo} from './Todo.compnt';
import {AppState} from '../logic/AppState';
import {Action,AddTodoAction,ToggleTodoAction} from '../logic/Actions';
import {dispatcher,state} from '../logic/StateAndDispatcher';
import {TodoService} from '../services/TodoService.service';
import {Logger} from '../services/Logger.service';
import {SearchCompleted} from '../Pipes/search-completed';
import {SearchPipe} from '../Pipes/search-pipe';

@Component({
  selector: 'todo-list',
  styleUrls  : ['app/css/todo.css'],
  pipes      : [SearchPipe,SearchCompleted],
  template: `<ul class="collection">
              <li class="collection-item" *ngFor="#todo of getTodos
                | async
                | searchCompleted: status
                | search: term">
                <todo-item
                  [todo]="todo"
                  (toggle)="toggleTodo($event)">
                </todo-item>
              </li>
            </ul>`,
  directives: [Todo]
})
export class TodoList {

  @Input() status;
  @Input() term;

  constructor(@Inject(dispatcher) private dispatcher: Observer<Action>,
              @Inject(state) private state: Observable<AppState>,
              private _todoService:TodoService,
              private _logger:Logger) {}

  ngOnInit() {
    this._todoService.getAll();
  }

  get getTodos() {
    return this.state.map(s => {return s.todos});
  }
  // update on the server doesnt work
  toggleTodo(todo){
    this.dispatcher.next(new ToggleTodoAction(todo));
  }
}
