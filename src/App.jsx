import { useState } from "react";
import Form from "./Components/Form";
import { Context } from "./context/Context";
import "./sass/main.scss";
function App() {

  const [isRegister, setIsRegister] = useState(true);

  return (
    <Context.Provider value ={{isRegister, setIsRegister}}>
      <div className="App">
        <Form></Form>
      </div>
    </Context.Provider>
  );
}

export default App;
