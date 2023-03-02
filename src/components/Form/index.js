import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

import './Form.css';

export default function Form({ handleSubmit, handleInput, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input onChange={handleInput} type="text" value={novaTarefa} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

/*
Form.defaultProps = {
  novaTarefa: 'valor padrão'
}
*/

Form.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
