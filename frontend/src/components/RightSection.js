import React from 'react';
import './Section.css';
import SpecEntryBox from './SpecEntryBox';

const RightSection = () => (
  <div
    className="section right-section"
    style={{ gridArea: 'right', backgroundColor: 'pink' }}
  >
    <SpecEntryBox />
  </div>
);

export default RightSection;
