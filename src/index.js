import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";////Componente al que le pasamos el store
import store from "./redux/store";////Viene del store 3

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
  <App />
</Provider>
);

