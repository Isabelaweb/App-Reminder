import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

export function Lista({ listaDeLembretes, removeLembrete }) {
  return (
    <div className="container_lista">
      <h2>Lista de lembretes</h2>

      <ul type="none">
        {listaDeLembretes.map((lembrete) => (
          <li key={lembrete.nome}>
            {lembrete.data} - {lembrete.nome}
            <button className="button_delete" onClick={() => removeLembrete(lembrete.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

Lista.propTypes = {
  listaDeLembretes: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string,
      data: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  removeLembrete: PropTypes.func
};
