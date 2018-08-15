import {
  GET_TODOS,
  ONCHANGE_EDIT_TODO_TITLE,
  ONCHANGE_EDIT_TODO_DESCRIPTION
} from "../actions";
import { combineReducers } from "redux";

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

const todoInitialState = {
  title: "",
  description: ""
};

function todo(state = todoInitialState, action) {
  switch (action.type) {
    case ONCHANGE_EDIT_TODO_TITLE:
      return {
        ...state,
        title: action.title
      };
    case ONCHANGE_EDIT_TODO_DESCRIPTION:
      return {
        ...state,
        description: action.description
      };
    default:
      return state;
  }
}

export default combineReducers({
  todos,
  todo
});
