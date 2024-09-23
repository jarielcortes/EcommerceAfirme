import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";
import configureMockStore from "redux-mock-store";
import RegisterUser from "../components/DashboardContent/RegisterUser/RegisterUser";
import { registerUser } from "../slices/userSlice";
import { toast } from "react-toastify";

// Create a mock store with thunk middleware (thunk middleware used for async actions)
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {
  user: {
    users: [],
  },
};

// Mock react-toastify
jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
  },
}));

// Suite of tests for RegisterUser Component
describe("RegisterUser Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    store.clearActions();
  });

  // Test for rendering the register form
  test("renders register form correctly", () => {
    render(
      <Provider store={store}>
        <RegisterUser />
      </Provider>
    );
    expect(
      screen.getByRole("textbox", { name: /Nombre/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /Correo/i })
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Contraseña", { selector: "input" })
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Confirmar Contraseña", { selector: "input" })
    ).toBeInTheDocument();
  });

  // Test for detecting validation messages for empty required fields
  test("shows validation messages for empty required fields", async () => {
    render(
      <Provider store={store}>
        <RegisterUser />
      </Provider>
    );
    fireEvent.click(screen.getByRole("button", { name: /Registrar/i }));
    expect(
      await screen.findByText(/^El nombre es obligatorio$/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/^El correo es obligatorio$/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/^La contraseña es obligatoria$/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(
        /^La confirmación de la contraseña es obligatoria$/i
      )
    ).toBeInTheDocument();
  });

  // Test for validating email format
  test("validates email format", async () => {
    render(
      <Provider store={store}>
        <RegisterUser />
      </Provider>
    );
    fireEvent.change(screen.getByRole("textbox", { name: /Correo/i }), {
      target: { value: "correo_prueba.com" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Registrar/i }));
    expect(
      await screen.findByText(/^El correo no es válido$/i)
    ).toBeInTheDocument();
  });

  // Test for validating password strength
  test("validates password complexity", async () => {
    render(
      <Provider store={store}>
        <RegisterUser />
      </Provider>
    );
    fireEvent.change(
      screen.getByLabelText("Contraseña", { selector: "input" }),
      {
        target: { value: "123" },
      }
    );
    fireEvent.click(screen.getByRole("button", { name: /Registrar/i }));
    expect(
      await screen.findByText(
        /^La contraseña debe tener al menos 6 caracteres$/i
      )
    ).toBeInTheDocument();
  });

  // Test for validating form submission
  test("validates correct form submission to register user", async () => {
    render(
      <Provider store={store}>
        <RegisterUser />
      </Provider>
    );

    fireEvent.change(screen.getByRole("textbox", { name: /Nombre/i }), {
      target: { value: "Jorge Cortes" },
    });
    fireEvent.change(screen.getByRole("textbox", { name: /Correo/i }), {
      target: { value: "jorge.cortes@afirme.com" },
    });
    fireEvent.change(
      screen.getByLabelText("Contraseña", { selector: "input" }),
      {
        target: { value: "abc123" },
      }
    );
    fireEvent.change(
      screen.getByLabelText("Confirmar Contraseña", { selector: "input" }),
      {
        target: { value: "abc123" },
      }
    );
    fireEvent.click(screen.getByRole("button", { name: /Registrar/i }));

    await waitFor(
      () => {
        const actions = store.getActions();
        console.log(actions); // Log the actions to inspect them
        expect(actions).toContainEqual({
          type: registerUser.type,
          payload: {
            name: "Jorge Cortes",
            email: "jorge.cortes@afirme.com",
            password: "abc123",
            confirmPassword: "abc123",
          },
        });
      },
      { timeout: 2500 } // This is necessary because the form submission has a timeout of 2000ms
    );
  });

  // Test for displaying success alert after form submission
  test("displays success alert after form submission", async () => {
    render(
      <Provider store={store}>
        <RegisterUser />
      </Provider>
    );

    fireEvent.change(screen.getByRole("textbox", { name: /Nombre/i }), {
      target: { value: "Jorge Cortes" },
    });
    fireEvent.change(screen.getByRole("textbox", { name: /Correo/i }), {
      target: { value: "jorge.cortes@afirme.com" },
    });
    fireEvent.change(
      screen.getByLabelText("Contraseña", { selector: "input" }),
      {
        target: { value: "abc123" },
      }
    );
    fireEvent.change(
      screen.getByLabelText("Confirmar Contraseña", { selector: "input" }),
      {
        target: { value: "abc123" },
      }
    );
    fireEvent.click(screen.getByRole("button", { name: /Registrar/i }));

    await waitFor(
      () => {
        expect(toast.success).toHaveBeenCalledWith(
          "Usuario registrado correctamente",
          expect.any(Object)
        );
      },
      { timeout: 2500 } // This is necessary because the form submission has a timeout of 2000ms
    );
  });
});
