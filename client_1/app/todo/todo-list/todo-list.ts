import {Component, OnInit} from 'angular2/core';
import {TodoService}       from '../../todoServcie/todoService.service';
import {TodoItem}          from '../todo-item/todo-item';
import {SearchPipe}        from '../../search-pipe/search-pipe';
import {SearchCompleted}   from '../../search-pipe/search-completed';

@Component({
  selector   : 'todo-list',
  styleUrls  : ['app/todo/todo.css'],
  directives : [TodoItem],
  pipes      : [SearchPipe,SearchCompleted],
  template   : `<ul>
                <li *ngFor="#todo of todoService.todos | searchCompleted">
                  <todo-item
                    [todo]="todo"
                    (toggle)="toggleTodo($event)">
                  </todo-item>
                </li>
              </ul>`
})
export class TodoList implements OnInit {

  ngOnInit() {
    this.todoService.getAll();
  }

  constructor(public todoService: TodoService) {
    console.log(this.todoService);
  }

  toggleTodo(todo){
    this.todoService.toggleTodo(todo);
  }

  // deleteTodo(todo) {
  //
  //   // calling the service to delete the todo
  // 	this.todoService.delete(todo._id)
  //       .subscribe(data => {
  //                    if (data.n === 1){
  //                       // save a n/w call by updating the local array
  //                       // instead of making a GET call again to refresh the data
  //                       for (let i in this.todoService.todos) {
  //                         if(this.todoService.todos[i]._id === todo._id){
  //                           this.todoService.todos.splice(i, 1);
  //                         }
  //                       }
  //                     }
  //                  },
  //                  err  => console.log(err),
  //                  ()   => console.log('data deleted'));
  // }

  setEditState(todo, state) {
  	if (state){
  	  	todo.isEditMode = state;
  	} else {
  		// don't store unwanted presentation logic in DB :/
  		delete todo.isEditMode;
  	}
  }
}
