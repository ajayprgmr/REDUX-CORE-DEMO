import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCake, buyCake } from '../redux/cakes/cakeActions';

const HooksCakeContainer = () => {
   const currentNoOfCakes = useSelector(state => state.numOfCakes);
   const dispatch = useDispatch();
   const [number, setNumber] = useState(1);

   return (
     <div>
       <h2>Num of Cakes - {currentNoOfCakes}</h2>
       <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
       
       <input 
         type='number' 
         value={number} 
         onChange={(e) => setNumber(e.target.value)} 
       />
       
       <button onClick={() => dispatch(addCake(number))}>Add Cake</button>
     </div>
   );
}

export default HooksCakeContainer;
