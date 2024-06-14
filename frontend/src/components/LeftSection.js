import React from 'react';
import PropTypes from 'prop-types';
import './Section.css';

const LeftSection = ({ responseData, error }) => {
  return (
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
        <br></br>
        <br></br>
        {responseData}
        <br></br>
        <br></br>
        <strong>{error === null ? '' : error}</strong>
      </p>
    </div>
  );
};

LeftSection.propTypes = {
  responseData: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  error: PropTypes.string,
};

export default LeftSection;
