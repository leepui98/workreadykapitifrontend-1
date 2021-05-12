import React from 'react';
import Button from '@material-ui/core/Button';

const TodoListItem = ({ todo, onRemovePressed }) => (
<div className="todo-item-container">
    <h4>{todo.text}</h4>
    <div>
        <Button>Mark as Completed</Button>
        <Button onClick={() => onRemovePressed(todo.text)}>Remove</Button>
    </div>
</div>
)
export default TodoListItem;