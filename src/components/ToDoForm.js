import React, { useState, useEffect } from 'react';

const initialFormValues = {
    title: '',
    description: '',
}

const ToDoForm = ({ todoAdd, todoEdit, todoUpdate, setTodoEdit }) => {

    const [formValues, setFormValues] = useState(initialFormValues);
    const { title, description } = formValues;
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    useEffect(() => {
        if (todoEdit) setFormValues(todoEdit);
    }, [todoEdit]);

    const handleInputChange = (e) => {
        const changedFormValues = {
            ...formValues,
            [e.target.name]: e.target.value
        }
        setFormValues(changedFormValues)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() === '') {
            setError('Debes indicar un título');
            return;
        }

        if (description.trim() === '') {
            setError('Debes indicar una descripción');
            return;
        }

        if (todoEdit) {
            //Actualizar tarea
            todoUpdate(formValues);
            setSuccessMessage('Tarea actualizada con éxito');
        }
        else {
            //Agregar tarea
            todoAdd(formValues);
            setSuccessMessage('Tarea agregada con éxito');
            setFormValues(initialFormValues);
        }

        setTimeout(() => {
            setSuccessMessage(null);
        }, 2000);
        setError(null);
    }

    return (
        <div>
            <h1>{todoEdit ? 'Editar tarea' : 'Nueva tarea'}</h1>
            {
                todoEdit &&
                <button
                    onClick={() => setTodoEdit(null)}
                    className='btn btn-sm btn-warning mb-2'
                >Cancelar edición
                </button>
            }

            <form
                onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Título"
                    className="form-control"
                    name='title'
                    value={title}
                    onChange={handleInputChange}
                />
                <textarea
                    placeholder='Descripción'
                    className="form-control mt-2"
                    name='description'
                    value={description}
                    onChange={handleInputChange}
                ></textarea>
                <button
                    className='btn btn-primary btn-block mt-2'>
                    {todoEdit ? 'Actualizar tarea' : 'Agregar tarea'}
                </button>
            </form>

            {
                error &&
                (<div className='alert alert-danger mt-2'>
                    {error}
                </div>)
            }
            {
                successMessage &&
                (<div className='alert alert-success mt-2'>
                    {successMessage}
                </div>)
            }

        </div>
    );
};

export default ToDoForm;