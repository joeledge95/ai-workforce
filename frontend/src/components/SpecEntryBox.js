import React, { useState, useRef } from 'react';
import './SpecEntryBox.css';

const TextEntryBox = () => {
  const textAreaRef = useRef(null);
  const [text, setText] = useState('');

  const handleButtonClick = () => {
    const newText = text + (text ? '\n' : '') + '• ';
    setText(newText);

    // Set focus to the textarea and move the cursor to the end
    textAreaRef.current.focus();
    textAreaRef.current.selectionStart = textAreaRef.current.selectionEnd =
      newText.length;
  };

  const handleChange = (e) => {
    setText(e.target.value); // Update the state with the new value of the textarea
  };

  return (
    <div className="text-entry-container">
      <button className="bullet-button" onClick={handleButtonClick}>
        Insert Bullet
      </button>
      <textarea
        ref={textAreaRef}
        value={text}
        onChange={handleChange}
        className="text-entry"
      ></textarea>
    </div>
  );
};

export default TextEntryBox;
