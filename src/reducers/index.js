import { GET_TODOS } from "../actions";

function todos(state = {}, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...action.todos
      };
    default:
      return state;
  }
}

export default todos;
