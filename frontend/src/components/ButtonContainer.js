import React from 'react';
import PropTypes from 'prop-types';
import './ButtonContainer.css';
import Button from './Button';

const ButtonContainer = ({ handleSubmit }) => {
  const textColor = '#ffffff';
  const saturation = '50%';
  const lightness = '70%';
  const buttons = [
    {
      text: 'View Mode',
      color: textColor,
      backgroundColor: `hsl(270, ${saturation}, ${lightness})`,
      onClick: () => alert('Button in development.'),
    },
    {
      text: 'Upload Files',
      color: textColor,
      backgroundColor: `hsl(210, ${saturation}, ${lightness})`,
      onClick: () => alert('Button in development.'),
    },
    {
      text: 'RUN',
      color: textColor,
      backgroundColor: `hsl(120, ${saturation}, ${lightness})`,
      onClick: handleSubmit,
    },
  ];

  return (
    <div className="button-container">
      {buttons.map((button, index) => (
        <Button
          key={index}
          text={button.text}
          color={button.color}
          backgroundColor={button.backgroundColor}
          onClick={button.onClick}
        />
      ))}
    </div>
  );
};

ButtonContainer.propTypes = {
  handleSubmit: PropTypes.func,
};

export default ButtonContainer;
