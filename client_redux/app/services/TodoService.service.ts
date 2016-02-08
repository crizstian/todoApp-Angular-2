import {Http}       from 'angular2/http';
import {Injectable,Inject} from 'angular2/core';
import {Todo} from '../models/Todo';
import {Action,AddTodoAction} from '../logic/Actions';
import {Observer} from 'rxjs/Observer';
import {dispatcher} from '../logic/StateAndDispatcher';
import {Logger} from './Logger.service';
import 'rxjs/Rx';

@Injectable()
export class TodoService{

  todos:Todo[];

  private baseAPI: string = 'http://localhost:8000/api/v1/todo';

  constructor(private http: Http,
              @Inject(dispatcher) private dispatcher: Observer<Action>,
              private _logger:Logger) { }

  getAll() {
  	this.http.get(this.baseAPI+'s')
             .map(res => { return res.json(); })
             .subscribe(todos =>
                          todos.forEach((item) => {
                            this.dispatcher.next(new AddTodoAction(item._id,item.text,item.isCompleted));
                          }),
                        err => this._logger.log(err),
                        () => this._logger.log('Data Retrieved From Server'));
  }

  save(todo){
    return this.http.post(this.baseAPI, JSON.stringify(todo))
                    .map(res => { return res.json(); });
  }

  update(todo){
    return this.http.put(this.baseAPI+'/'+todo._id, JSON.stringify(todo))
                    .map(res => { return res.json(); });
  }

  get(id){
  	return this.http.get(this.baseAPI+'/'+id)
                    .map(res => { return res.json(); });
  }

  delete(id){
  	return this.http.delete(this.baseAPI+'/'+id)
                    .map(res => { return res.json(); });
  }

}
