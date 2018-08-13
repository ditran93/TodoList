import { takeEvery, call, put } from 'redux-saga/effects'
import {createTodo, fetchTodos, editTodo, deleteTodo, completeTodo} from '../utils/apiHelpers'

export const GET_TODOS = 'GET_TODOS'
export const GET_TODOS_ASYNC = 'GET_TODOS_ASYNC'
export const CREATE_TODO_ASYNC = 'CREATE_TODO_ASYNC' 
export const EDIT_TODO_ASYNC = 'EDIT_TODO_ASYNC'
export const DELETE_TODO_ASYNC = 'DELETE_TODO_ASYNC'
export const COMPLETE_TODO_ASYNC = 'COMPLETE_TODO_ASYNC' 

export function* watcherSaga() {
    yield takeEvery(GET_TODOS_ASYNC, fetchTodosSaga)
    yield takeEvery(CREATE_TODO_ASYNC, createTodoSaga)
    yield takeEvery(EDIT_TODO_ASYNC, editTodoSaga)
    yield takeEvery(DELETE_TODO_ASYNC, deleteTodoSaga)
    yield takeEvery(COMPLETE_TODO_ASYNC, completeTodoSaga)
}

function* completeTodoSaga(todoId) {
    const id = todoId.id
    const todos = yield call(completeTodo, id)
    yield put({ type: GET_TODOS, todos}) 
}

export function completeTodoAsync(id) {
    return {
        type: COMPLETE_TODO_ASYNC,
        id
    }
}

function* deleteTodoSaga(todoId) {
    const id = todoId.id
    const todos = yield call(deleteTodo, id)
    yield put({ type: GET_TODOS, todos})
}

export function deleteTodoAsync(id) {
 return {
     type: DELETE_TODO_ASYNC,
     id
 }
}

function* editTodoSaga(todo) {
    const id = todo.id
    const title = todo.title
    const description = todo.description
    const todos = yield call(editTodo, id, title, description)
    yield put({ type: GET_TODOS, todos })
}

export function editTodoAsync(id, title, description) {
    return {
        type: EDIT_TODO_ASYNC,
        id,
        title,
        description,
    }
}

function* createTodoSaga(title){
    const todoTitle = title.title
    const todos = yield call(createTodo, todoTitle)
    yield put({ type: GET_TODOS, todos })
}

export function createTodoAsync(title) {
    return {
        type: CREATE_TODO_ASYNC,
        title
    }
}

function* fetchTodosSaga() {
    const todos = yield call(fetchTodos);
    yield put({ type: GET_TODOS, todos });
}

export function getTodosAsync() {
    return {
        type: GET_TODOS_ASYNC,
    }
}

