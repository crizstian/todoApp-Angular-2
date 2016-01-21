import {Http}       from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/Rx';

@Injectable()
export class TodoService{

  data: any;

  constructor(private http: Http) { }

  getAll(){
  	return this.http.get('http://localhost:8000/api/v1/todos')
                    .map(res => { return res.json(); });
  }

  get(id){
  	return this.http.get('/api/v1/todo/'+id)
                    .map(res => res.json());
  }

  save(todo){
  	return this.http.post('/api/v1/todo', todo)
                    .map(res => res.json());
  }

  update(todo){
  	return this.http.put('/api/v1/todo/'+todo._id, todo)
                    .map(res => res.json());
  }

  delete(id){
  	return this.http.delete('/api/v1/todo/'+id)
                    .map(res => res.json());
  }

}
