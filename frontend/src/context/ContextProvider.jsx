import React, { useState} from 'react';
import { AppContext } from './AppContext';
import { initialRiders } from '../handler/rider';


export const ContextProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('home');

  const [riders,setRiders]= useState(initialRiders);// better be another fetch but for now we do the context

  const [places,setPlaces] = useState([null, null]);
  const [route, setRoute] = useState(null);

  return (
    <AppContext.Provider value={{
      activeSection, setActiveSection ,
      riders,setRiders,
      places,setPlaces,
      route, setRoute
      }}>
      {children}
    </AppContext.Provider>
  );
};

