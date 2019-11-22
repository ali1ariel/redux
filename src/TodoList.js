import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


import {addTodo} from './store/ducks/todos';

class TodoList extends Component {


    state = {
        newTodoText: '',
    }

    AddNewTodo = () => {
        this.props.addTodo(this.state.newTodoText);

        this.setState({ newTodoText: '' })

    }
    render() {
        return (
            <div>
            <ul>
                {this.props.todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))} 
            </ul>

            <input
            type="text"
            value={this.state.newTodoText}
            onChange={(e) => this.setState({newTodoText: e.target.value})}
            />
            <button onClick={this.AddNewTodo}>Enviar</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({addTodo}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);