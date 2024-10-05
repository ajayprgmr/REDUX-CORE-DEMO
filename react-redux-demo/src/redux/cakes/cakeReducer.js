import { ADD_CAKE, BUY_CAKE } from "./cakeActionsTypes";

const initialState = {
    numOfCakes: 10,
};

export const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1,
            };
        case ADD_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes + parseInt(action.payload),
            };
        default:
            return state;
    }
};
