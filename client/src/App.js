import React from 'react';
import logo from './logo.svg';
import { ThemeProvider } from '@material-ui/core/styles';

const theme = {};

function App() {
  return (
    <ThemeProvider theme={theme}>...</ThemeProvider>
  );
}

export default App;
