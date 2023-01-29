import { useEffect } from "react";
import { useState, useContext } from "react";
import { Context } from "../context/Context";
import { createUser } from "../firebase/createUser";
import Message from "./Message";
import { loginUser } from "../firebase/loginUser";

const WelcomeForm = () => {
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
    isRegistering
      ? createUser(user).then(
          (value) => {
            value.user.displayName = user.name;
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
      : loginUser(user).then(
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
        handleSubmit(event);
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
              value={user.name}
              onChange={(event) => {
                setUser({ ...user, name: event.target.value });
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
            name=""
            id="email"
            placeholder=" Tu email"
            required
            value={user.email}
            onChange={(event) => {
              setUser({ ...user, email: event.target.value });
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

export default WelcomeForm;
