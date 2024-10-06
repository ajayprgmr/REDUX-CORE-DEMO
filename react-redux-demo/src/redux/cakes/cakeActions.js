import { ADD_CAKE, BUY_CAKE } from "./cakeActionsTypes"

export const buyCake = ()=> {
   return {
        type:BUY_CAKE,
   }
}
export const addCake = (number)=> {
   return {
        type:ADD_CAKE,
        payload:number,
   }
}

