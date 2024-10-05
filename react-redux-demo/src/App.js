import React from 'react'
import './App.css';
import CakeContainer from './components/cakeContainer';
import { Provider } from 'react-redux'
import store from './redux/store';
import HooksCakeContainer from './components/hooksCakeContainer';

const App = () => {
  return (
    <Provider store={store}>
      <main>
        <HooksCakeContainer/>
        <hr/>
        <CakeContainer />
      </main>
    </Provider>
  )
}

export default App
