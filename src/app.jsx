import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

const App = () => {
  return (
    <Provider>
      Hello World
    </Provider>
  )
}

export default App;