import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css'
// Redux related code
import store from "./Store/store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/es/integration/react';
import persistStore from 'redux-persist/es/persistStore';
// Redux related code


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Redux related code */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        {/* Redux related code */}
        <App />
        {/* Redux related code */}
      </PersistGate>
    </Provider>
    {/* Redux related code */}
  </React.StrictMode>
);

