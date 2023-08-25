import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'components';
import { GlobalStyles, theme } from 'styles';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <BrowserRouter basename="/frontend-create-cocktail">
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
