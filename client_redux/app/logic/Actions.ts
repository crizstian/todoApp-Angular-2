export class AddTodoAction {
  constructor(public _id: string, public text: string){}
}

export class ToggleTodoAction    {
  constructor(public _id: string){}
}

export class SetVisibilityFilter {
  constructor(public filter: string){}
}

export type Action = AddTodoAction|ToggleTodoAction|SetVisibilityFilter;
