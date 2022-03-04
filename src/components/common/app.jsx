import React from 'react';
import Home from '../pages/home';
import { AppContextProvider } from '../../context/app';

const App = () => (
  <AppContextProvider data={[]}>
    <Home />
  </AppContextProvider>
);

export default App;
