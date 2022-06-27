import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ todos }) => {
    return (
        <div>
            <h1 className='text-right'>Soy ToDoList</h1>

            {
                todos.map(todo => <ToDo todo={todo} key={todo.id} />)
            }

        </div>
    );
};

export default ToDoList;