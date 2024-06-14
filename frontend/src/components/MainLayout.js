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

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <main className="main-layout">
      <LeftSection />
      <RightSection specText={formData.specText} handleChange={handleChange} />
      <div className="interaction-container">
        <Inputs
          password={formData.password}
          maxGptCalls={formData.maxGptCalls}
          hardMaxGptCalls={formData.hardMaxGptCalls}
          handleChange={handleChange}
        />
        <ButtonContainer />
      </div>
    </main>
  );
};

export default MainLayout;
