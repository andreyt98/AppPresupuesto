import { useContext } from "react";
import { Context } from "../context/Context";

const Form = () => {
  const { isRegistering, setIsRegistering } = useContext(Context);

  const irARegistro = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <form>
      <h2>{isRegistering ? "Registro " : "Inicio de sesión"}</h2>
      <label htmlFor="email">
        Email <input type="email" name="" id="email" placeholder=" Tu email" required />
      </label>

      <label htmlFor="password">
        Password <input type="password" name="" minLength="6" id="password" placeholder=" Tu password" required />
      </label>

      <button type="submit">{isRegistering ? "Registrarse" : "Inicio de sesión "}</button>
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
