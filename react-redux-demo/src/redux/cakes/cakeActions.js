import { ADD_CAKE, BUY_CAKE } from "./cakeActionsTypes"

export const buyCake = ()=> {
    console.log('buycake')
   return {
        type:BUY_CAKE,
   }
}
export const addCake = (number)=> {
    console.log('addcake')
   return {
        type:ADD_CAKE,
        payload:number,
   }
}

