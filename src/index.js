import React from 'react';
import ReactDOM from 'react-dom';
import RouterApp from './router';
import {ThemeProvider} from '@emotion/react';
import {AppProvider} from './context/app-context';
import theme from './theme';
import './index.css';
import 'react-simple-flex-grid/lib/main.css';

ReactDOM.render(
  <AppProvider>
    <ThemeProvider theme={theme}>
      <RouterApp />
    </ThemeProvider>
  </AppProvider>,
  document.getElementById('root')
);
