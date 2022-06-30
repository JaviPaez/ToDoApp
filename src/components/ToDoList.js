import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ todos, todoDelete, todoToogleCompleted, setTodoEdit }) => {
    return (
        <div>
            <h1 className='text-right'>Soy ToDoList</h1>

            {todos.length === 0
                ? (<div className='alert alert-primary'>No hay tareas</div>)
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