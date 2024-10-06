import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addIceCream, buyIceCream } from '../redux/icecream/actions';

const HooksIceContainer = () => {
   const currentNoOfIceCreams = useSelector(state => state.iceCream.noOfIceCream);
   const dispatch = useDispatch();
   const [number, setNumber] = useState(1);

   return (
     <div>
      <h1>Using Hooks</h1>
       <h2>Num of IceCreams - {currentNoOfIceCreams}</h2>
       <button onClick={() => dispatch(buyIceCream())}>Buy Cake</button>
       
       <input 
         type='number' 
         value={number} 
         onChange={(e) => setNumber(e.target.value)} 
       />
       <button onClick={() => dispatch(addIceCream(number))}>Add Cake</button>
     </div>
   );
}

export default HooksIceContainer;
