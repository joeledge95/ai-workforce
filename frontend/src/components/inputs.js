import React from 'react';
import './Inputs.css';

const Inputs = () => (
  <div className="inputs-container">
    <div className="input-group">
      <label htmlFor="max-gpt-calls">Max GPT Calls</label>
      <input type="number" id="max-gpt-calls" name="max-gpt-calls" />
    </div>
    <div className="input-group">
      <label htmlFor="hard-max-gpt-calls">Hard Max GPT Calls</label>
      <input type="number" id="hard-max-gpt-calls" name="hard-max-gpt-calls" />
    </div>
  </div>
);

export default Inputs;
