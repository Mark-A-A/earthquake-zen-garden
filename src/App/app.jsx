import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './ReduxStore/configureStore';
import earthquakes from '../../data/seed.json'

import './styles/style.scss'

const initialState = { earthquakes }; 
const store = configureStore(initialState);

const App = () => {
  return (
    <Provider store={store}>
      Hello World
    </Provider>
  )
}

export default App;