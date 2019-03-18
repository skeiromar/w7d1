import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store.js';
import { receiveTodos, receiveTodo } from './actions/todo_actions';
import { RECEIVE_TODOS, RECEIVE_TODO } from './actions/todo_actions';
import Root from './components/root.jsx';
import { allTodos } from './reducers/selectors';


document.addEventListener("DOMContentLoaded", () => {
    // const st = store(); 
    window.store = store();
    window.RECEIVE_TODO = RECEIVE_TODO
    window.RECEIVE_TODOS = RECEIVE_TODOS
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.allTodos = allTodos;
    // configureStore();
    ReactDOM.render(<Root store={ store() } />, document.getElementById('root'));
})
