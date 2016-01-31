const todos = function(state = [], action){
  switch(action.type){
    case 'ADD_TODO':
      return [...state,{
        id: action.id,
        text: action.text,
        completed: false
      }];
      case 'TOGGLE_TODO':
      return state.map(todo => {
        if(todo.id !== action.id){
          return todo;
        } else {
          return Object.assign({},todo,{completed:!todo.completed});
        }
      });
    default:
      return state;
  }
}

declare var describe, beforeEach, it, expect;

const testAddTodo = () => {
  const statBefore = [];

  const action = {
    type: 'ADD_TODO',
    id: 1,
    text: 'Learn Redux'
  };

  const stateAfter = [{
    id: 1,
    text: 'Learn Redux',
    completed: false
  }];

  describe('Add Todo', function() {
     it('state after should be equal to state before', function() {
       expect(todos(statBefore,action)).toEqual(stateAfter);
     });
   });
};

const testToggleTodo = () => {
  const stateBefore = [{
    id: 0,
    text: 'Learn Redux',
    completed: false
  },
  {
    id: 1,
    text: 'Go shopping',
    completed: false
  }];

  const action = {
    type: 'TOGGLE_TODO',
    id: 1
  };

  const stateAfter = [{
    id: 0,
    text: 'Learn Redux',
    completed: false
  },
  {
    id: 1,
    text: 'Go shopping',
    completed: true
  }];


describe('Toggle todo', function() {
   it('state after should be equal to state before', function() {
     expect(todos(stateBefore,action)).toEqual(stateAfter);
   });
 });
};

testAddTodo();
testToggleTodo();
