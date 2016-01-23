import {Component, OnInit} from 'angular2/core';
import {TodoService}       from '../../todoServcie/todoService.service';
import {TodoItem}          from '../todo-item/todo-item';

@Component({
  selector   : 'todo-list',
  styleUrls  : ['app/todo/todo.css'],
  directives : [TodoItem],
  template   : `<ul>
                <li *ngFor="#todo of todoService.todos">
                  <todo-item [todo]="todo"></todo-item>
                </li>
              </ul>`
})
export class TodoList implements OnInit {

  ngOnInit() {
    this.getHeroes();
  }

  constructor(public todoService: TodoService) {
    console.log(this.todoService.todos);
  }

  getHeroes() {
    this.todoService.getAll();
  }

  type(){
    console.log(this.todoService.todos);
  }

  // updateTodoText($event, todo) {
  //   if ($event.which === 13) {
  //   		todo.text = $event.target.value;
  //       let _todo = {
  //             _id : todo._id,
  //             text : todo.text ,
  //             isCompleted : todo.isCompleted
  //       };
  //
  //       // calling the service to update the todo text
  //       this.todoService.update(_todo)
  //           // wait for the response before resetting the state
  //           .subscribe(data => this.setEditState(todo, false),
  //                      err  => console.log(err),
  //                      ()   => console.log('updated...'));
  // 	}
  // }
  //
  // updateStatus(todo) {
  //    let _todo = {
  //       _id : todo._id,
  //       text : todo.text ,
  //       isCompleted : !todo.isCompleted
  //     };
  //
  //     // calling the service to update the todo status
  //     this.todoService.update(_todo)
  //         // wait for the response before updating the UI
  //         .subscribe(data => todo.isCompleted = !todo.isCompleted,
  //                    err  => console.log(err),
  //                    ()   => console.log('updated...'));
  //
  // }
  //
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
