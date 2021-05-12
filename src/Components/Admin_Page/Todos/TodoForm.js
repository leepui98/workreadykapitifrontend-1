import React from 'react';
import {useState} from 'react';
import { connect } from 'react-redux';
import { createTodo } from './Actions';
import Button from '@material-ui/core/Button';



const TodoForm = ({ todos, onCreatePressed }) => {
const [inputValue, setInputValue] = useState('');
return(
    <div className="new-todo-form">
        <input className="new-todo-input" type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Enter new task"/>
        <Button onClick={() => {
            const isDuplicateText = todos.some(todo => todo.text === inputValue);
            if (!isDuplicateText) {
                onCreatePressed(inputValue);
                setInputValue('');
            }
        }}
            className="new-todo-button">Create Task</Button>
    </div>
);
};

const mapStateToProps = state => ({
    todos: state.todos, 

}); //Take state object and return another object containing the pieces of the state the components need access to
    
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text)),


}); //allows components to trigger actions that redux store will respond to



export default connect(mapStateToProps, mapDispatchToProps)(TodoForm); 