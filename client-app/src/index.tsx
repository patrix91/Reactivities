import React from 'react'
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css'
import './app/layout/styles.css';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import { store, StoreContext } from './app/stores/store';

// const container = document.getElementById('root') as HTMLElement;
// const root = createRoot(container);
ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  //document.getElementById('root') as HTMLElement
  document.body
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
