import { useContext } from "react";
import { Context } from "../context/Context";

const Form = () => {
  const {isRegister, setIsRegister} = useContext(Context);

  const registrarse = () => {
    setIsRegister(!isRegister);
  };
  return (
    <form>
        <h2>{isRegister ? "Inicio de sesión" : "Registro"}</h2>
      <label htmlFor="email">
        Email
        <input type="email" name="" id="email" placeholder=" your email" />
      </label>

      <label htmlFor="password">Password
      <input type="password" name="" id="password" placeholder=" your password" />
      </label>

      <button type="submit">{isRegister ? "Iniciar sesión" : "Registrarse"}</button>
      <p>
        {isRegister ? (
          <>
            No tienes una cuenta? <a href="#"onClick={() => {registrarse()}}>Crear nueva cuenta</a>
          </>
        ) : (
          <>
            Ya tienes una cuenta? <a href="#"onClick={() => {registrarse()}}>Iniciar sesión</a>
          </>
        )}
      </p>
    </form>
  );
};

export default Form;
