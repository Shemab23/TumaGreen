import React, { useState} from 'react';
import { AppContext } from './AppContext';
import { initialRiders } from '../handler/rider';


export const ContextProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('home');
  // better be another fetch but for now we do the context
  const [riders,setRiders]= useState(initialRiders);

  return (
    <AppContext.Provider value={{
      activeSection, setActiveSection ,
      riders,setRiders
      }}>
      {children}
    </AppContext.Provider>
  );
};

