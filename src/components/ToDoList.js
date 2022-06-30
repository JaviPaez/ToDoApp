import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ todos, todoDelete, todoToogleCompleted, setTodoEdit }) => {
    return (
        <div>
            <h2 className='text-right display-4'>Soy ToDoList</h2>

            {todos.length === 0
                ? (<div className='alert alert-primary text-right'>No hay tareas</div>)
                : (todos.map(todo => (
                    <ToDo
                        todo={todo}
                        key={todo.id}
                        todoDelete={todoDelete}
                        todoToogleCompleted={todoToogleCompleted}
                        setTodoEdit={setTodoEdit}
                    />
                )))}
        </div>
    );
};

export default ToDoList;