import fetch from "isomorphic-fetch";
import { arrayToObject } from "../utils/helpers";

export function deleteTodo(id) {
  return fetch(`https://practiceapi.devmountain.com/api/tasks/${id}`, {
    method: "DELETE"
  })
    .then(response => response.json())
    .then(data => arrayToObject(data));
}

export function completeTodo(id) {
  return fetch(`https://practiceapi.devmountain.com/api/tasks/${id}`, {
    method: "PUT"
  })
    .then(response => response.json())
    .then(data => arrayToObject(data));
}

export function createTodo(title) {
  return fetch("https://practiceapi.devmountain.com/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({ title: title })
  })
    .then(response => response.json())
    .then(data => arrayToObject(data));
}

export function editTodo(id, title, description) {
  return fetch(`https://practiceapi.devmountain.com/api/tasks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({
      title: title,
      description: description
    })
  })
    .then(response => response.json())
    .then(data => arrayToObject(data));
}

export function fetchTodos() {
  return fetch("https://practiceapi.devmountain.com/api/tasks")
    .then(response => response.json())
    .then(data => arrayToObject(data));
}
