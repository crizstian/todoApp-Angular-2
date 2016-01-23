import {Http}       from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/Rx';
import {Todo} from '../todo/todo-model';

@Injectable()
export class TodoService{

  todos: Todo[] = [];
  private baseAPI: string = 'http://localhost:8000/api/v1/todo';

  constructor(private http: Http) { }

  getAll() {
  	return this.http.get(this.baseAPI+'s')
                    .map(        res => { return res.json(); })
                    .subscribe(todos => {for(let todo of todos){
                                            this.todos.push(new Todo(todo._id,todo.text,todo.isCompleted));
                                          }
                                        },
                               err   => this.logError(err));
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
