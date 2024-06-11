import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ text, color, backgroundColor, onClick }) => (
  <button
    className="button"
    onClick={onClick}
    style={{ color: color, backgroundColor: backgroundColor }}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default Button;
