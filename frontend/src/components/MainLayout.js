import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import ButtonContainer from './ButtonContainer';
import Inputs from './inputs';
import './MainLayout.css';

const MainLayout = () => (
  <main className="main-layout">
    <div className="main-content">
      <LeftSection />
      <RightSection />
    </div>
    <div className="controlls">
      <Inputs />
      <ButtonContainer />
    </div>
  </main>
);

export default MainLayout;
