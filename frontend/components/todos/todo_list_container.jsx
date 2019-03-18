
import TodoList from './todo_list';
import {connect } from 'react-redux';
import {allTodos} from '../../reducers/selectors';
import {receiveTodo, removeTodo} from '../../actions/todo_actions';

const mapStateToProps = (state) => {
    return {
        todos: allTodos(state)
    };
};

const mapDispatchToProps = dispatch => ({
    receiveTodo: (todo) => dispatch(receiveTodo(todo)),
    removeTodo: (id) => dispatch(removeTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);