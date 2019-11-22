//Action Types

export const Types = {
  ADD_TODO: "todos/ADD_TODO"
};

// Reducer

export default function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Math.random(),
          text: action.text
        }
      ];
    default:
      return state;
  }
}


//Action Creators
export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        text,
    }
}