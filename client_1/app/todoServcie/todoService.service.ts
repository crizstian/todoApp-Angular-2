import {Http}       from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/Rx';
import {Todo} from '../todo/todo-model/todo-model';

@Injectable()
export class TodoService{

  todos: Todo[] = new Array<Todo>(new Todo('','fuck'));
  private baseAPI: string = 'http://localhost:8000/api/v1/todo';

  constructor(private http: Http) { }

  // this method is beacuase the immutability can let the pipe act, over the new todos added
  // so with this method we update the reference of the todos array,
  // so the pipe can act over the new array
  addTodo(todo:Todo){
    this.todos = [...this.todos,todo];
  }

  // to handle the event of toggle by emmiting the todo and update the reference
  // of the todos array so that the isCompleted pipe can act over the new reference of the todos array
  toggleTodo(todo:Todo){
    const i = this.todos.indexOf(todo);
    const isCompleted = (todo.isCompleted === 'started') ? 'completed' : 'started';
    const toggledTodo = Object.assign({},todo,{isCompleted});

    this.todos = [...this.todos.slice(0,i),
                  todo,
                  ...this.todos.slice(i+1)
                 ];
  }

  getAll() {
  	this.http.get(this.baseAPI+'s')
             .map(res => { return res.json(); })
             .subscribe(todos =>
                        todos.forEach((item) => {
                          this.todos = [...this.todos,new Todo(item._id,item.text,item.isCompleted)];
                        }),
                        err => this.logError(err));
  }

  get(id){
  	return this.http.get(this.baseAPI+'/'+id)
                    .map(res => { return res.json(); });
  }

  save(todo){
  	return this.http.post(this.baseAPI, todo)
                    .map(res => { return res.json(); });
  }

  update(todo){
  	return this.http.put(this.baseAPI+'/'+todo._id, todo)
                    .map(res => { return res.json(); });
  }

  delete(id){
  	return this.http.delete(this.baseAPI+'/'+id)
                    .map(res => { return res.json(); });
  }

  logError(err) {
    console.error('There was an error: ' + err);
  }

}
