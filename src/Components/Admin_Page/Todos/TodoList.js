import React from 'react';
import TodoListItem from './TodoListItem';
import TodoForm from './TodoForm';
import { connect } from 'react-redux';
import { removeTodo } from './Actions';

const TodoList = ({ todos = [], onRemovePressed }) => (
    <div>
        <br/>
        <h2>Pending Tasks</h2>
        <TodoForm />
        {todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed}/>)}
    </div>
);
const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),

})

export default connect(mapStateToProps, mapDispatchToProps) (TodoList);