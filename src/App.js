import React, { useState } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

const initialTodos = [
    {
        id: 1,
        title: 'To Do #1',
        description: 'Description #1',
        completed: false,
    },
    {
        id: 2,
        title: 'To Do #2',
        description: 'Description #2',
        completed: true,
    }
];

const App = () => {

    const [todos, setTodos] = useState(initialTodos);

    const todoDelete = (todoId) => {
        const changedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(changedTodos);
    }

    const todoToogleCompleted = (todoId) => {
        //Una forma
        // const changedTodos = todos.map(todo => {

        //     const todoEdit = {
        //         ...todo,
        //         completed: !todo.completed
        //     }

        //     if (todo.id === todoId) {
        //         return todoEdit
        //     }

        //     else {
        //         return todo
        //     }
        // })   

        //Otra forma
        // const changedTodos = todos.map(todo => (
        //     todo.id === todoId
        //         ? { ...todo, completed: !todo.completed }
        //         : todo
        // ))

        const changedTodos = todos.map(todo => todo.id === todoId
            ? { ...todo, completed: !todo.completed }
            : todo)

        setTodos(changedTodos);
    }

    const todoAdd = (todo) => {
        const newTodo = {
            id: Date.now(),
            ...todo,
            completed: false,
        }

        const changedTodos = [
            newTodo,
            ...todos,
        ]

        setTodos(changedTodos);
    }

    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-8'>
                    <ToDoList
                        todos={todos}
                        todoDelete={todoDelete}
                        todoToogleCompleted={todoToogleCompleted}
                    />
                </div>
                <div className='col-4'>
                    <ToDoForm
                        todoAdd={todoAdd} />
                </div>
            </div>
        </div >
    );
}

export default App;