import { combineReducers } from "redux";
import { cakeReducer } from "./cakes/cakeReducer";
import {icecreamReducer} from "./icecream/icecreamReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,        // State related to cakes
    iceCream: icecreamReducer // State related to ice creams
});

export default rootReducer;
