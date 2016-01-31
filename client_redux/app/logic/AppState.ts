
export interface Todo {
  _id:string;
  text:string;
  completed:boolean;
}

export interface AppState {
  todos: Todo[];
  visibilityFilter:string;
}
