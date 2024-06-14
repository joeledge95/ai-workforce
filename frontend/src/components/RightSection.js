import React from 'react';
import PropTypes from 'prop-types';
import './Section.css';
import SpecEntryBox from './SpecEntryBox';

const RightSection = ({ specText, handleChange }) => (
  <div
    className="section right-section"
    style={{ gridArea: 'right', backgroundColor: 'pink' }}
  >
    <SpecEntryBox specText={specText} handleChange={handleChange} />
  </div>
);

RightSection.propTypes = {
  specText: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
};

export default RightSection;
