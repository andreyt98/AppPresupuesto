import { useState } from "react";
import { Context } from "./context/Context";
import Inicio from "./pages/Inicio";
import "./sass/main.scss";

function App() {

  const [isRegistering, setIsRegistering] = useState(true);

  return (
    <Context.Provider value ={{isRegistering, setIsRegistering}}>
      <div className="App">
        <Inicio></Inicio>
      </div>
    </Context.Provider>
  );
}

export default App;
