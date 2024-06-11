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
    <Inputs />
    <ButtonContainer />
  </main>
);

export default MainLayout;
