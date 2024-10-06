import { BUY_ICECREAM, ADD_ICECREAM } from './actionTypes'; 

export const addIceCream = (number) => {
    return {
        type: ADD_ICECREAM,
        payload:number,
    };
};

export const buyIceCream = () => {
    return {
        type: BUY_ICECREAM
    };
};
