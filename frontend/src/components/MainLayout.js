import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import './MainLayout.css';

const MainLayout = () => (
  <main className="main-layout">
    <LeftSection />
    <RightSection />
  </main>
);

export default MainLayout;
