import {Component,Inject,Input} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {Todo} from './Todo.compnt';
import {AppState} from '../logic/AppState';
import {Action,AddTodoAction,ToggleTodoAction,DeleteTodoAction} from '../logic/Actions';
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
                  [index]="todo._id"
                  [todo]="todo"
                  (toggle)="toggleTodo($event)"
                  (delete)="deleteTodo($event)">
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

  toggleTodo(todo){
    this.dispatcher.next(new ToggleTodoAction(todo));
    this.state.subscribe((s) =>{
      s.todos.forEach((t) => {
        if(t._id === todo._id){
          this._todoService.update(t)
              .subscribe(
                 err  => this._logger.log(err),
                 ()   => this._logger.log('Todo toggled')
              );
        }
      });
    });
  }

  deleteTodo(id){
    this._todoService.delete(id)
        .subscribe(
           data => this._logger.log(data),
           err  => this._logger.log(err),
           ()   => {
             this.dispatcher.next(new DeleteTodoAction(id));
        });
  }
}
