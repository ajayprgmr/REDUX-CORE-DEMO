import React from 'react'
import './App.css';
import CakeContainer from './components/cakeContainer';
import { Provider } from 'react-redux'
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <main>
        <CakeContainer />
      </main>
    </Provider>
  )
}

export default App
