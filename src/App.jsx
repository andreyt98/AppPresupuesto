import { useState } from "react";
import { Context } from "./context/Context";
import Inicio from "./pages/Inicio";
import "./sass/main.scss";

function App() {

  const [isRegistering, setIsRegistering] = useState(true);
  const [isUserReady, setIsUserReady] = useState(false);

  return (
    <Context.Provider value ={{isRegistering, setIsRegistering,isUserReady, setIsUserReady}}>
      <div className="App">
        <Inicio></Inicio>
      </div>
    </Context.Provider>
  );
}

export default App;
