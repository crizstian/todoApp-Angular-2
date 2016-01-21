import {Http}       from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/Rx';

@Injectable()
export class TodoService{
  private baseAPI: string = 'http://localhost:8000/api/v1/todo';

  constructor(private http: Http) { }

  getAll() {
  	return this.http.get(this.baseAPI+'s')
                    .map(res => { return res.json(); });
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

}
