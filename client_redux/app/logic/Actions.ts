import {Todo} from '../models/Todo';

export class AddTodoAction {
  constructor(public _id?: string, public text: string='', public isCompleted:string='started'){}
}

export class ToggleTodoAction    {
  constructor(public todo:Todo){}
}

export class SetVisibilityFilter {
  constructor(public filter: string){}
}

export type Action = AddTodoAction|ToggleTodoAction|SetVisibilityFilter;
