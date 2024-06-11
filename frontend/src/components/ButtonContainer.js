import React from 'react';
import './ButtonContainer.css';
import Button from './Button';

const ButtonContainer = () => {
  const textColor = '#ffffff';
  const saturation = '50%';
  const lightness = '70%';
  const buttons = [
    {
      text: 'View Mode',
      color: textColor,
      backgroundColor: `hsl(270, ${saturation}, ${lightness})`,
      onClick: () => alert('Button 1 clicked'),
    },
    {
      text: 'Upload Files',
      color: textColor,
      backgroundColor: `hsl(210, ${saturation}, ${lightness})`,
      onClick: () => alert('Button 1 clicked'),
    },
    {
      text: 'RUN',
      color: textColor,
      backgroundColor: `hsl(120, ${saturation}, ${lightness})`,
      onClick: () => alert('Button 1 clicked'),
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

export default ButtonContainer;
