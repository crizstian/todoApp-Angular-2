import {Subject} from 'rxjs/Subject';
import {Action,AddTodoAction,ToggleTodoAction} from '../logic/Actions';
// import {Reducer} from '../logic/Reducers';

declare var describe, beforeEach, it, expect;

const testAddTodo = () => {

  // describe('Test Todo',() => {
  //   var actions;
  //   var states;
  //   var reducer;
  //
  //   beforeEach(() => {
  //     reducer = new Reducer();
  //     actions = new Subject<Action>();
  //   });
  //
  //   it('should create a new todo', () => {
  //     states = reducer.stateFn({todos: [], visibilityFilter: 'SHOW_ALL'}, actions);
  //
  //     actions.next(new AddTodoAction('100', 'todo1'));
  //     actions.next(new AddTodoAction('101', 'todo2'));
  //
  //     states.subscribe(s => {
  //       // expect(s.todos.length).toEqual(2);
  //       expect(s.todos[0]).toEqual({_id: '100', text: 'todo1', completed: false});
  //       expect(s.todos[1]).toEqual({_id: '101', text: 'todo2', completed: false});
  //     });
  //
  //   });
  //
  //   it('should toggle a todo', () => {
  //     const todos = [
  //       {_id: '200', text: 'todo1', completed: false},
  //       {_id: '201', text: 'todo2', completed: false}];
  //
  //     states = reducer.stateFn({todos: todos, visibilityFilter: 'SHOW_ALL'}, actions);
  //
  //     actions.next(new ToggleTodoAction('200'));
  //
  //     states.subscribe(s => {
  //       expect(s.todos[0].completed).toBeTruthy();
  //       expect(s.todos[1].completed).toBeFalsy();
  //     });
  //
  //   });
  //
  // });//end of describe
}

testAddTodo();
