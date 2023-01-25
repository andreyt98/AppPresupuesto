import { useState } from "react";
import { Context } from "./context/Context";
import UserHome from "./pages/UserHome";
import Welcome from "./pages/Welcome";
import "./sass/main.scss";

function App() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isUserReady, setIsUserReady] = useState(false);
  const [message, setMessage] = useState({active:false,text:null});
  const [user, setUser] = useState({ name:null,email: null, password: null });

  return (
    <Context.Provider value={{ user,setUser,isRegistering, setIsRegistering, isUserReady, setIsUserReady,message,setMessage }}>
      <div className="App">{isUserReady ? <UserHome></UserHome> : <Welcome></Welcome>}</div>
    </Context.Provider>
  );
}

export default App;
