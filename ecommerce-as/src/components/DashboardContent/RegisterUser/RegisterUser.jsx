//////////////////
// Imports
/////////////  ///

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../../slices/userSlice";
import { notifySuccess } from "../../../utils/Notifications";

function RegisterUser() {
  //////////////////
  // Hooks
  /////////////  ///

  // Initial values for emptu form
  const initialDataForm = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const dispatch = useDispatch();

  const users = useSelector((state) => state.user.users); // Get users data from store

  //////////////////
  // Functions
  /////////////  ///

  // Validation schema with Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "El nombre debe tener al menos 3 caracteres")
      .required("El nombre es obligatorio"),
    email: Yup.string()
      .email("El correo no es válido")
      .required("El correo es obligatorio"),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("La contraseña es obligatoria"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
      .required("La confirmación de la contraseña es obligatoria"),
  });

  // Function to handle form submission
  const handleSubmit = (values, actions) => {
    // Simulate saving data
    setTimeout(() => {
      dispatch(registerUser(values)); // Register user with redux

      actions.setSubmitting(false); //Formik hook
      notifySuccess("Usuario registrado correctamente");
      actions.resetForm(); // Reset form data
    }, 2000);
  };

  return (
    <div className="flex flex-col bg-base-200 p-6">
      <h2 className="mb-6 text-green-600 text-2xl font-semibold">
        Registro de Usuario
      </h2>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <Formik
            initialValues={initialDataForm}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="form-control" autoComplete="off">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* NAME */}
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
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-error"
                    />
                  </div>

                  {/* EMAIL */}
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
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-error"
                    />
                  </div>

                  {/* PASSWORD */}
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
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-error"
                    />
                  </div>

                  {/* CONFIRM PASSWORD */}
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
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-error"
                    />
                  </div>
                </div>

                {/* REGISTER */}
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

      {/* DataTable */}
      <h2 className="mb-2 mt-8 text-green-600 text-2xl font-semibold">
        Lista de Usuarios
      </h2>
      <div className="card w-full bg-base-100 shadow-xl mt-6">
        <div className="card-body">
          <div className="overflow-x-auto">
            <table className="table w-full table-zebra table-bordered">
              <thead>
                <tr>
                  <th className="bg-orange-400 text-white">Nombre</th>
                  <th className="bg-orange-400 text-white">Correo</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((user, index) => (
                    <tr key={index}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className="text-center bg-gray-100">
                      No hay usuarios registrados
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterUser;
