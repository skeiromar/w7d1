import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO} from '../actions/todo_actions';
import { merge } from 'lodash';


const initialState = {
    1: {
        id: 1,
        title: 'wash car',
        body: 'with soap',
        done: 'false'
    },
    2: {
        id: 2,
        title: 'wash dog',
        body: 'with shampoo',
        done: 'true'
    },
};

export default (state = initialState, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_TODO:

            const result = {};
            result[action.todo.id] = action.todo;
            return merge({} , state, result);

        case RECEIVE_TODOS:
            const res = {};
            for (let i = 0; i < action.todos.length; i++) {
                res[action.todos[i].id] = action.todos[i];
            }
            return res;

        case REMOVE_TODO:
            const res_ = {};
            let arr = Object.values(state)
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].id !== action.id){
                    res_[arr[i].id] = arr[i];
                }
            }
            return res_;
        default:
            return state;
    }
}