import React, { useState, useRef } from 'react';
import './SpecEntryBox.css';

const TextEntryBox = () => {
  const [bulletMode, setBulletMode] = useState(false);
  const textAreaRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const start = textAreaRef.current.selectionStart;
      const end = textAreaRef.current.selectionEnd;
      const value = textAreaRef.current.value;
      const bullet = bulletMode ? '\n• ' : '\n';
      textAreaRef.current.value =
        value.substring(0, start) + bullet + value.substring(end);
      textAreaRef.current.selectionStart = textAreaRef.current.selectionEnd =
        start + bullet.length;
    }
  };

  const handleButtonClick = () => {
    setBulletMode(!bulletMode);
    textAreaRef.current.focus();
  };

  return (
    <div className="text-entry-container">
      <button className="bullet-button" onClick={handleButtonClick}>
        {bulletMode ? 'Switch to Normal Text' : 'Switch to Bullet Points'}
      </button>
      <textarea
        ref={textAreaRef}
        className="text-entry"
        onKeyDown={handleKeyDown}
      ></textarea>
    </div>
  );
};

export default TextEntryBox;
