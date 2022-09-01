import { useState } from "react";
import { Formulario } from "../components/Formulario";
import { Lista } from "../components/Lista";
import "./App.css"

function App() {
  const [lembretes, setLembretes] = useState([]);
  const salvaDados = (lembrete) => {
    setLembretes([...lembretes, lembrete])
  };
  return (
    <div className="AppStyle">
      <Formulario salvaDados={salvaDados}
      />
      <Lista listaDeLembretes={lembretes} />
    </div>
  );
}

export default App;
