import { useContext } from "react";
import { Context } from "../context/Context";
import Logo from "./Logo";
const Navbar = () => {
  const { setIsUserReady } = useContext(Context);

  const handleLogOut = () => {
    if (confirm("Realmente desea salir?")) {
      setIsUserReady(false);
    }
  };
  return (
    <nav className="nav">
      <Logo />

      <ul className="links">
        <li>
          <a href="#">Historial</a>
        </li>
        <li>
          <a href="#" onClick={handleLogOut}>
            Salir
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
