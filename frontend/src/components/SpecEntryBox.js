import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './SpecEntryBox.css';

const TextEntryBox = ({ specText, handleChange }) => {
  const textAreaRef = useRef(null);
  const [text, setText] = useState(specText);

  const handleButtonClick = () => {
    const newText = text + (text ? '\n' : '') + '• ';
    setText(newText);
    handleChange({ target: { name: 'specText', value: newText } }); // Update parent state

    // Set focus to the textarea and move the cursor to the end
    textAreaRef.current.focus();
    textAreaRef.current.selectionStart = textAreaRef.current.selectionEnd =
      newText.length;
  };

  const handleTextChange = (e) => {
    setText(e.target.value); // Update the state with the new value of the textarea
    handleChange({ target: { name: 'specText', value: e.target.value } }); // Update parent state
  };

  return (
    <div className="text-entry-container">
      <button className="bullet-button" onClick={handleButtonClick}>
        Insert Bullet
      </button>
      <textarea
        ref={textAreaRef}
        value={text}
        onChange={handleTextChange}
        className="text-entry"
      ></textarea>
    </div>
  );
};

TextEntryBox.propTypes = {
  specText: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
};

export default TextEntryBox;
