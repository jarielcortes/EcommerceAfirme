//////////////////
// Imports
/////////////  ///

import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

function RegisterUser() {

    //////////////////
    // Hooks
    /////////////  ///

    // Store form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    //////////////////
    // Functions
    /////////////  ///

    // Validation schema with Yup
    const validationSchema = Yup.object({
        name: Yup.string()
            .min(3, 'El nombre debe tener al menos 3 caracteres')
            .required('El nombre es obligatorio'),
        email: Yup.string()
            .email('El correo no es válido')
            .required('El correo es obligatorio'),
        password: Yup.string()
            .min(6, 'La contraseña debe tener al menos 6 caracteres')
            .required('La contraseña es obligatoria'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
            .required('La confirmación de la contraseña es obligatoria')
    });

    // Function to handle form submission
    const handleSubmit = (values, actions) => {
        setFormData(values);

        // Simulate saving data
        setTimeout(() => {
            actions.setSubmitting(false); //Formik hook
            notifySuccess('Usuario registrado correctamente');
            actions.resetForm(); // Reset form data
        }, 2000);
    };

    // Function to display success notification
    const notifySuccess = (message) => toast.success(message, {
        style: {
            backgroundColor: 'green',
            color: 'white',
            fontSize: '16px',
            padding: '16px',
            width: '400px',
        },
        position: 'bottom-center'
    });

    return (
        <div className="flex flex-col bg-base-200 p-6">
            <h2 className="mb-6 text-green-600 text-2xl font-semibold">Registro de Usuario</h2>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <Formik
                        initialValues={formData}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className="form-control" autoComplete="off">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Campo de Nombre */}
                                    <div className="mb-4">
                                        <label htmlFor="name" className="label">
                                            <span className="label-text">Nombre</span>
                                        </label>
                                        <Field
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="input input-bordered w-full"
                                        />
                                        <ErrorMessage name="name" component="div" className="text-error" />
                                    </div>

                                    {/* Campo de Correo */}
                                    <div className="mb-4">
                                        <label htmlFor="email" className="label">
                                            <span className="label-text">Correo</span>
                                        </label>
                                        <Field
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="input input-bordered w-full"
                                        />
                                        <ErrorMessage name="email" component="div" className="text-error" />
                                    </div>

                                    {/* Campo de Contraseña */}
                                    <div className="mb-4">
                                        <label htmlFor="password" className="label">
                                            <span className="label-text">Contraseña</span>
                                        </label>
                                        <Field
                                            type="password"
                                            name="password"
                                            id="password"
                                            className="input input-bordered w-full"
                                        />
                                        <ErrorMessage name="password" component="div" className="text-error" />
                                    </div>

                                    {/* Campo de Confirmar Contraseña */}
                                    <div className="mb-4">
                                        <label htmlFor="confirmPassword" className="label">
                                            <span className="label-text">Confirmar Contraseña</span>
                                        </label>
                                        <Field
                                            type="password"
                                            name="confirmPassword"
                                            id="confirmPassword"
                                            className="input input-bordered w-full"
                                        />
                                        <ErrorMessage name="confirmPassword" component="div" className="text-error" />
                                    </div>
                                </div>

                                {/* Botón de Registrar */}
                                <div className="form-control mt-6">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={isSubmitting}
                                    >
                                        Registrar
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
    </div>
);
}

export default RegisterUser;