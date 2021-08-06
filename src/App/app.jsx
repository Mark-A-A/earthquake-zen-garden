import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import './styles/style.scss'

const App = () => {
  return (
    <>
      Hello World
    </>
  )
}

export default App;