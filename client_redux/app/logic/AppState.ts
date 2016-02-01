import {Todo} from '../models/Todo';

export interface AppState {
  todos: Todo[];
  visibilityFilter:string;
}
