import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from './src/navigation/AppContainer';
import './src/services/http';
import store from './src/redux';

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default App;
