import React from 'react';

const ToDo = ({ todo, todoDelete, todoToogleCompleted }) => {

    return (
        <div className='card mt-2'>
            <div className='card-body'>
                <h3 className='card-title text-right'>
                    {todo.title}
                    <button
                        onClick={() => todoToogleCompleted(todo.id)}
                        className={`btn btn-sm ml-2${todo.completed ? 'btn btn-outline-success' : 'btn btn-success'}`}
                    >
                        {todo.completed ? 'Terminado' : 'Terminar'}
                    </button>
                </h3>
                <p className='card-text text-right'>
                    {todo.description}
                </p>
                <hr />
                <div className='d-flex justify-content-end'>
                    <button className='btn btn-sm btn-outline-primary mr-2'>Editar</button>
                    <button
                        onClick={() => todoDelete(todo.id)}
                        className='btn btn-sm btn-outline-danger'>Eliminar</button>
                </div>
            </div>
        </div >
    );
};

export default ToDo;