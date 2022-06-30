import React, { useState } from 'react';

const initialFormValues = {
    title: '',
    description: '',
}

const ToDoForm = ({ todoAdd }) => {

    const [formValues, setFormValues] = useState(initialFormValues);
    const { title, description } = formValues;
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

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

        //Agregar tarea
        todoAdd(formValues);
        setFormValues(initialFormValues);
        setSuccessMessage('Tarea agregada con éxito');

        setTimeout(() => {
            setSuccessMessage(null);
        }, 2000);
        setError(null);
    }

    return (
        <div>
            <h1>Nueva tarea</h1>
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
                    Agregar tarea
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