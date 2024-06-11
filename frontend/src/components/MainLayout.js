import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import ButtonContainer from './ButtonContainer';
import Inputs from './Inputs';
import './MainLayout.css';

const MainLayout = () => (
  <main className="main-layout">
    <LeftSection />
    <RightSection />
    <div className="interaction-container">
      <Inputs />
      <ButtonContainer />
    </div>
  </main>
);

export default MainLayout;
