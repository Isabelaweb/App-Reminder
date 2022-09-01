import { useState } from "react";
import { Formulario } from "../components/Formulario";
import { Lista } from "../components/Lista";
import "./App.scss";

function App() {
  const [lembretes, setLembretes] = useState([]);
  const salvaDados = (lembrete) => {
    setLembretes([...lembretes, lembrete]);
  };

  const removendoLembrete = (idLembrete) => {
    const lembretesSemEsseId = lembretes.filter(
      (lembrete) => lembrete.id !== idLembrete
    );

    setLembretes(lembretesSemEsseId)
  };

  return (
    <div className="container">
      <Formulario salvaDados={salvaDados} />
      <Lista listaDeLembretes={lembretes} removeLembrete={removendoLembrete} />
    </div>
  );
}

export default App;
