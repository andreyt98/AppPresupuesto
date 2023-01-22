import { useContext } from "react";
import Navbar from "../Components/Navbar";
import { Context } from "../context/Context";

const UserHome = () => {
  const {user} = useContext(Context)
  return <div>
    <Navbar></Navbar>
    hola! {user.name}
    </div>;
};

export default UserHome;
