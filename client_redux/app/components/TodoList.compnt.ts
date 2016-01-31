import {Component,Inject} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {Todo} from './Todo.compnt';
import {AppState} from '../logic/AppState';
import {Action,AddTodoAction,ToggleTodoAction,SetVisibilityFilter} from '../logic/Actions';
import {dispatcher,state} from '../logic/StateAndDispatcher';

@Component({
  selector: 'todo-list',
  template: `<todo *ngFor="#t of todos"
                [text]="t.text" [completed]="t.completed"
                (toggle)="emitToggle(t.id)"></todo>`,
  directives: [Todo]
})
export class TodoList {

  todos:Todo[];

  constructor(@Inject(dispatcher) private dispatcher: Observer<Action>,
              @Inject(state) private state: Observable<AppState>) {}

  ngOnInit() {
    this.state.map(s => this.getVisibleTodos(s.todos, s.visibilityFilter))
              .subscribe(s => this.todos = s);
  }

  emitToggle(id) {
    this.dispatcher.next(new ToggleTodoAction(id));
  }

  getVisibleTodos(todos:any, filter: string): Todo[] {
    return todos.filter(t => {
      if (filter === "SHOW_ACTIVE") return !t.completed;
      if (filter === "SHOW_COMPLETED") return t.completed;
      return true;
    });
  }

}
