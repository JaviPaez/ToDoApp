import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ todos, todoDelete, todoToogleCompleted }) => {
    return (
        <div>
            <h1 className='text-right'>Soy ToDoList</h1>

            {
                todos.map(todo => (
                    <ToDo
                        todo={todo}
                        key={todo.id}
                        todoDelete={todoDelete}
                        todoToogleCompleted={todoToogleCompleted}
                    />
                ))
            }

        </div>
    );
};

export default ToDoList;