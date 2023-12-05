import { useState } from 'react';
import NameContext from './context/NameContext';

const Wrapper = ({ children }) => {
  const [name, setName] = useState("");

  return (
    <NameContext.Provider value={{name, setName}}>
      { children }
    </NameContext.Provider>
  );
};

export default Wrapper;
