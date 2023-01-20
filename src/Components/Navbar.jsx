import Logo from "./Logo";
const Navbar = () => {
  return <nav className="nav">
    <Logo></Logo>
    <ul className="links">
        <li><a href="#">Historial</a></li>
        <li><a href="#">Salir</a></li>
    </ul>
    </nav>;
};

export default Navbar;
