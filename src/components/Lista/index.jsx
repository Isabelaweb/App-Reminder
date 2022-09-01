import React from "react";
import PropTypes from "prop-types";

export function Lista({ listaDeLembretes }) {
  return (
    <div>
        <h2>Lista de lembretes</h2>
      <ul type="none">
        {listaDeLembretes.map((lembrete) => (
          <li key={lembrete.nome}>{lembrete.nome}</li>
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
    })
  ),
};
