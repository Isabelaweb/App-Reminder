import React, { useState } from "react";
import { Button } from "../Button";
import "./style.scss"


export function Formulario({ salvaDados }) {
  const [nome, setName] = useState("");
  const [data, setData] = useState("");

  const tratarFormulario = (evento) => {
    evento.preventDefault();
    salvaDados({ nome, data });
  };

  return (
    <div className="container_formulario">
    <form className="formulario"onSubmit={tratarFormulario}>
      <h2 className="titulo">Novo lembrete</h2>
      <div className="container_inputs">
        <label htmlFor="inputNome">Nome</label>
        <input
          className="inputFormulario"
          type="text"
          id="inputNome"
          required
          value={nome}
          onChange={(evento) => setName(evento.target.value)}
        />
      </div>
      <div className="container_inputs">
        <label htmlFor="inputData">Data</label>
        <input
          className="inputFormulario"
          type="date"
          required
          id="inputData"
          value={data}
          onChange={(evento) => setData(evento.target.value)}
        />
      </div>

      <Button></Button>
    </form>
    </div>
  );
}
