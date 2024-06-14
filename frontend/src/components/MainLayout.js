import React, { useState } from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import ButtonContainer from './ButtonContainer';
import Inputs from './Inputs';
import './MainLayout.css';

const MainLayout = () => {
  // State for form elements
  const [formData, setFormData] = useState({
    password: '',
    maxGptCalls: 1000,
    hardMaxGptCalls: 1200,
    specText: '',
  });

  // State for response
  const [responseData, setResponseData] = useState('');
  const [error, setError] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle submitting form to the backend
  const handleSubmit = async () => {
    const url = 'http://localhost:5000/api/data'; // TODO

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Success:', data);
        setResponseData(data);
      } else {
        throw new Error('Failed to send data');
      }
    } catch (error) {
      setError(`Error: ${error.message}`);
    }
  };

  return (
    <main className="main-layout">
      <LeftSection responseData={responseData} error={error} />
      <RightSection specText={formData.specText} handleChange={handleChange} />
      <div className="interaction-container">
        <Inputs
          password={formData.password}
          maxGptCalls={formData.maxGptCalls}
          hardMaxGptCalls={formData.hardMaxGptCalls}
          handleChange={handleChange}
        />
        <ButtonContainer handleSubmit={handleSubmit} />
      </div>
    </main>
  );
};

export default MainLayout;
