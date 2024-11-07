import React, { useState } from 'react';
import useAddTwo from './hooks/useAddTwo';

function ParentComponent() {
  const [input, setInput] = useState(''); 
  const [result, updateValue] = useAddTwo();

  const handleButtonClick = () => {
    if (input !== '') {
      updateValue(Number(input)); 
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <input 
        type="number" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Enter a number"
      />
      <br />
      <button 
        onClick={handleButtonClick} 
      >
        Click me
      </button>
      <p style={{ marginTop: '20px', fontSize: '18px' }}>
        Result: {result !== null ? result : 'No result'}
      </p>
    </div>
  );
}

export default ParentComponent;
