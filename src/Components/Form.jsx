import { useEffect } from "react";
import { useState, useContext } from "react";
import { Context } from "../context/Context";
import { createUser } from "../firebase/createUser";
import Message from "./Message";

const Form = () => {
  const { isRegistering, setIsRegistering } = useContext(Context);
  const { isUserReady, setIsUserReady } = useContext(Context);
  const { user, setUser } = useContext(Context);
  const { message, setMessage } = useContext(Context);
  const irARegistro = () => {
    setIsRegistering(!isRegistering);
  };

  useEffect(() => {
    setTimeout(() => {
      if (message.active) {
        setMessage({ active: false });
      }
    }, 3000);
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <h2>{isRegistering ? "Registro " : "Inicio de sesión"}</h2>
      <label htmlFor="email">
        Email{" "}
        <input
          type="email"
          name=""
          id="email"
          placeholder=" Tu email"
          required
          value={user.email}
          onChange={(event) => {
            setUser({ ...user, email: event.target.value });
          }}
        />
      </label>

      <label htmlFor="password">
        Password{" "}
        <input
          type="password"
          name=""
          minLength="6"
          id="password"
          placeholder=" Tu password"
          required
          value={user.password}
          onChange={(event) => {
            setUser({ ...user, password: event.target.value });
          }}
        />
      </label>

      <button type="submit">{isRegistering ? "Registrarse" : "Inicio de sesión "}</button>
      {message.active && <Message text={message.text}></Message>}

      <p>
        {isRegistering ? (
          <>
            Ya tienes una cuenta?{" "}
            <a
              href="#"
              onClick={() => {
                irARegistro();
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
                irARegistro();
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

export default Form;
