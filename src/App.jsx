import { useState } from "react";
import { Context } from "./context/Context";
import UserHome from "./pages/UserHome";
import Welcome from "./pages/Welcome";
import "./sass/main.scss";

function App() {
  const [isRegistering, setIsRegistering] = useState(true);
  const [isUserReady, setIsUserReady] = useState(false);
  const [message, setMessage] = useState({active:false,text:null});

  return (
    <Context.Provider value={{ isRegistering, setIsRegistering, isUserReady, setIsUserReady,message,setMessage }}>
      <div className="App">{isUserReady ? <UserHome></UserHome> : <Welcome></Welcome>}</div>
    </Context.Provider>
  );
}

export default App;
