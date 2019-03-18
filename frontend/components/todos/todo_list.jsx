import React  from "react";
import TodoForm from './todo_form.jsx';

export default (props) => {
    return (
        <div>
            <ul style={{"background": "linear-gradient(90deg, slategrey, gold, green)", "borderRadius": "7px", "textShadow":"2px 2px 3px red", "color": "white"}}>
            {props.todos.map(el => (
                <li className={el.done} key={el.id} >
                <p>{el.title}</p>
                <p>{el.body}</p>
                    <button onClick={() => {

                        props.receiveTodo({id: el.id, title: el.title, body: el.body, done:el.done === 'true' ? 'false' : 'true'})
                    }}>Done</button>
                    <button onClick={() => {

                        props.removeTodo(el.id)}}
                    >Delete</button>
                </li>
            ))}
            </ul>
            <TodoForm receiveTodo = {props.receiveTodo}/>
        </div>
    )
};