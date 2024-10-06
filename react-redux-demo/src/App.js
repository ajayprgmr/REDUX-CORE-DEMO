import React from 'react'
import './App.css';
import CakeContainer from './components/cakeContainer';
import { Provider } from 'react-redux'
import store from './redux/store';
import HooksCakeContainer from './components/hooksCakeContainer';
import IceCreamContainer from './components/iceCreamContainer';
import HooksIceContainer from './components/hooksIceCreamContainer';


const App = () => {
  return (
    <Provider store={store}>
      <main>
       <div className='container'>  
       <HooksCakeContainer/>
       <CakeContainer />
       </div>
        <hr/>
        <div className='container'>
          <HooksIceContainer/>
        <IceCreamContainer/>
        </div>
      </main>
    </Provider>
  )
}

export default App
