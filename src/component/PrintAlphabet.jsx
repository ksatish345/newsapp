import React, { useState } from 'react';

import '../../src/index.css'

export default function PrintAlphabet(props) {
    const [color, setColor] = useState('');
    const [isActive, setIsActive] = useState(false);
  
    // Function to toggle color and isActive state
    function changeColorButton() {
      setColor('blue'); // Update the color
      setIsActive(!isActive); // Toggle active state
    }
  
    return (
      <div>
        <button
          className="mybtn mybtn-success"
          style={{
            backgroundColor: isActive ? color : '#28a745',
          }}
          onClick={changeColorButton}
        >
          {props.value}
        </button>
      </div>
    );
  
}