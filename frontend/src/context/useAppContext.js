import { AppContext } from './AppContext';
import React, { useContext} from 'react';

export const useAppContext = () => useContext(AppContext);
