import React from 'react';
import './Section.css';

const LeftSection = () => (
  <div
    className="section"
    style={{ gridArea: 'left', backgroundColor: 'grey' }}
  >
    <h2>TODO</h2>
  </div>
);

export default LeftSection;
