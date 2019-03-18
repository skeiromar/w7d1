import React from 'react';


class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const {title, body} = this.state; 
        this.props.receiveTodo({ id: new Date().getTime(), title, body, done: "false"});
    }
    update(field) {
        return e => {
            this.setState({ [field] : e.target.value });
        };
    }


    render() {
        return(
            <form onSubmit={this.handleSubmit} className="form">
                <label htmlFor="">Title: 
                    <input type="text" onChange={this.update('title')} 
                    value={this.state.name}/>
                </label>
                <label htmlFor="">Body:
                    <input type="text" onChange={this.update('body')}
                    value={this.state.body}/>
                </label>

                <input type="submit" value="DO IT!!!!"/>
            </form>
        );
    }
}

export default TodoForm;