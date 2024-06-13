import React from 'react';
import './Section.css';

const LeftSection = () => (
  <div
    className="section"
    style={{ gridArea: 'left', backgroundColor: 'grey' }}
  >
    <h2>Instructions</h2>
    <p>
      Welcome!
      <br></br>
      <br></br>
      In order to start add your specifications in the box on the right side.
      <br></br>
      <br></br>
      Use the upload button to share supplementory assets, and use the RUN
      button to start the process.
    </p>
  </div>
);

export default LeftSection;
