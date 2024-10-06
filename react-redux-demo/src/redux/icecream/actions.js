import { BUY_ICECREAM, ADD_ICECREAM } from './actionTypes'; 

export const addIceCream = (number) => {
    console.log('addIceCream'); 
    return {
        type: ADD_ICECREAM,
        payload:number,
    };
};

export const buyIceCream = () => {
    console.log('buyIceCream'); 
    return {
        type: BUY_ICECREAM
    };
};
