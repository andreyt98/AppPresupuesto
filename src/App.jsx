import { useState } from "react";
import { Context } from "./context/Context";
import UserHome from "./pages/UserHome";
import Welcome from "./pages/Welcome";
import "./sass/main.scss";

function App() {
  const [isRegistering, setIsRegistering] = useState(true);
  const [isUserReady, setIsUserReady] = useState(false);

  return (
    <Context.Provider value={{ isRegistering, setIsRegistering, isUserReady, setIsUserReady }}>
      <div className="App">{isUserReady ? <UserHome></UserHome> : <Welcome></Welcome>}</div>
    </Context.Provider>
  );
}

export default App;
