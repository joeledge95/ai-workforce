import React from 'react';
import './Inputs.css';

const Inputs = () => (
  <div className="inputs-container">
    <div className="input-group">
      <label htmlFor="password">GPT API Key</label>
      <input type="password" id="password" name="password" />
    </div>
    <div className="input-group">
      <label htmlFor="max-gpt-calls">Max GPT Calls</label>
      <input
        type="number"
        id="max-gpt-calls"
        name="max-gpt-calls"
        defaultValue={1000}
      />
    </div>
    <div className="input-group">
      <label htmlFor="hard-max-gpt-calls">Hard Max GPT Calls</label>
      <input
        type="number"
        id="hard-max-gpt-calls"
        name="hard-max-gpt-calls"
        defaultValue={1200}
      />
    </div>
  </div>
);

export default Inputs;
