import { ADD_ICECREAM, BUY_ICECREAM } from "./actionTypes"


const initialState = {
    noOfIceCream: 20,
}
export const icecreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ICECREAM:
            return {
                ...state,
                noOfIceCream: state.noOfIceCream + parseInt(action.payload),
            }
        case BUY_ICECREAM:
            return {
                ...state,
                noOfIceCream: state.noOfIceCream - 1
            }
        default: return state
    }
}
