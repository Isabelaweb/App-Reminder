import React, { useId, useState } from "react";
import PropTypes from "prop-types";

import { Button } from "../Button";
import "./style.scss";

export function Formulario({ salvaDados }) {
  const [nome, setName] = useState("");
  const [data, setData] = useState("");

  const tratarFormulario = (evento) => {
    evento.preventDefault();

    salvaDados({ nome, data, id: `${Date.now()}` });
  };

  return (
    <div className="container_formulario">
      <form className="formulario" onSubmit={tratarFormulario}>
        <h2 className="formulario_titulo">Novo lembrete</h2>

        <div className="formulario_container_inputs">
          <label className="formulario_label" htmlFor="nome">
            Nome
          </label>
          <input
            className="formulario_input"
            type="text"
            id="nome"
            placeholder="Ex: Ir ao mercado"
            name="nome"
            required
            value={nome}
            onChange={(evento) => setName(evento.target.value)}
          />
        </div>

        <div className="formulario_container_inputs">
          <label className="formulario_label" htmlFor="data">
            Data
          </label>
          <input
            className="formulario_input"
            type="date"
            required
            id="data"
            name="data"
            value={data}
            onChange={(evento) => setData(evento.target.value)}
          />
        </div>

        <Button />
      </form>
    </div>
  );
}

Formulario.propTypes = {
  salvaDados: PropTypes.func,
};
