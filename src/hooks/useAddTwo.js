import { useState } from 'react';

function useAddTwo() {
  const [value, setValue] = useState(null); 

  const updateValue = (Input) => {
    if (typeof Input === 'number') {
      setValue(Input + 2); 
      
    }
  };

  return [value, updateValue];
}

export default useAddTwo;
