import React, { useState } from 'react';
import './Inputs.css';

const Inputs = () => {
  // State for form elements
  const [formData, setFormData] = useState({
    password: '',
    maxGptCalls: 1000,
    hardMaxGptCalls: 1200,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="inputs-container">
      <div className="input-group">
        <label htmlFor="password">GPT API Key</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="max-gpt-calls">Max GPT Calls</label>
        <input
          type="number"
          id="max-gpt-calls"
          name="maxGptCalls"
          value={formData.maxGptCalls}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="hard-max-gpt-calls">Hard Max GPT Calls</label>
        <input
          type="number"
          id="hard-max-gpt-calls"
          name="hardMaxGptCalls"
          value={formData.hardMaxGptCalls}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Inputs;
