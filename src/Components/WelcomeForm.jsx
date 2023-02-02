import { useEffect } from "react";
import { useState, useContext } from "react";
import { Context } from "../context/Context";
import { createUser } from "../firebase/createUser";
import Message from "./Message";
import { loginUser } from "../firebase/loginUser";
import useForm from "../Hooks/useForm";

const WelcomeForm = () => {
  const { isRegistering, setIsRegistering } = useContext(Context);
  const { isUserReady, setIsUserReady } = useContext(Context);
  const [formValues, handleSubmit, handleValuesChange] = useForm({ name: null, email: null, password: null });
  const { message, setMessage } = useContext(Context);

  useEffect(() => {
    setTimeout(() => {
      if (message.active) {
        setMessage({ active: false });
      }
    }, 3000);
  }, [message]);

  const logOrRegister = () => {
    isRegistering
      ? createUser(formValues).then(
          () => {
            setIsUserReady(true);
          },
          (error) => {
            switch (error.code) {
              case "auth/email-already-in-use":
                setMessage({ active: true, text: "El correo ingresado ya está registrado" });
                break;
            }
          }
        )
      : loginUser(formValues).then(
          () => {
            setIsUserReady(true);
          },
          (error) => {
            switch (error.code) {
              case "auth/user-not-found":
                setMessage({ active: true, text: "El correo ingresado no existe" });
                break;
              case "auth/wrong-password":
                setMessage({ active: true, text: "La contraseña es incorrecta" });
                break;
            }
          }
        );
  };

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event, logOrRegister);
      }}
      className="welcome-form"
    >
      <h2>{isRegistering ? "Registro " : "Inicio de sesión"}</h2>
      {isRegistering && (
        <label htmlFor="name">
          Nombre
          <div className="input">
            <i className="bi bi-person-fill"></i>
            <input
              type="text"
              name="name"
              id=""
              value={formValues.name}
              onChange={(event) => {
                handleValuesChange(event);
              }}
              placeholder="Tu nombre"
              required
            />
          </div>
        </label>
      )}
      <label htmlFor="email">
        Email{" "}
        <div className="input">
          <i className="bi bi-envelope-fill"></i>
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" Tu email"
            required
            value={formValues.email}
            onChange={(event) => {
              handleValuesChange(event);
            }}
          />
        </div>
      </label>

      <label htmlFor="password">
        Password{" "}
        <div className="input">
          <i className="bi bi-lock-fill"></i>
          <input
            type="password"
            name="password"
            minLength="6"
            id="password"
            placeholder=" Tu password"
            required
            value={formValues.password}
            onChange={(event) => {
              handleValuesChange(event);
            }}
          />
          <i class="bi bi-eye-slash-fill"></i>
        </div>
      </label>

      <button type="submit">{isRegistering ? "Registrarse" : "Iniciar sesión "}</button>
      {message.active && <Message text={message.text} />}

      <p id="options">
        {isRegistering ? (
          <>
            Ya tienes una cuenta?{" "}
            <a
              href="#"
              onClick={() => {
                setIsRegistering(!isRegistering);
              }}
            >
              Iniciar sesión
            </a>
          </>
        ) : (
          <>
            No tienes una cuenta?{" "}
            <a
              href="#"
              onClick={() => {
                setIsRegistering(!isRegistering);
              }}
            >
              Crear nueva cuenta
            </a>
          </>
        )}
      </p>
    </form>
  );
};

export default WelcomeForm;
