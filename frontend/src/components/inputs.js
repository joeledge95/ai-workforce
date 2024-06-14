import React from 'react';
import PropTypes from 'prop-types';
import './Inputs.css';

const Inputs = ({ password, maxGptCalls, hardMaxGptCalls, handleChange }) => {
  return (
    <div className="inputs-container">
      <div className="input-group">
        <label htmlFor="password">GPT API Key</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="max-gpt-calls">Max GPT Calls</label>
        <input
          type="number"
          id="max-gpt-calls"
          name="maxGptCalls"
          value={maxGptCalls}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="hard-max-gpt-calls">Hard Max GPT Calls</label>
        <input
          type="number"
          id="hard-max-gpt-calls"
          name="hardMaxGptCalls"
          value={hardMaxGptCalls}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

Inputs.propTypes = {
  password: PropTypes.string.isRequired,
  maxGptCalls: PropTypes.number.isRequired,
  hardMaxGptCalls: PropTypes.number.isRequired,
  handleChange: PropTypes.func,
};

export default Inputs;
