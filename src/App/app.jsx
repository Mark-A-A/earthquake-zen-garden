import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './ReduxStore/configureStore';
import Navigation from "./Router/Navigation";
import earthquakes from '../../data/seed.json'
import user from '../../data/profile.json'

import './styles/style.scss'

const initialState = { earthquakes, user }; 
const store = configureStore(initialState);

const App = () => {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  )
}

export default App;