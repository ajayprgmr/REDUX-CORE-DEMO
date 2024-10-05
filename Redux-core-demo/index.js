    const redux = require('redux');
    const reduxLogger = require('redux-logger')

    const createStore = redux.createStore;
    const combineReducers = redux.combineReducers;
    const applyMiddleware = redux.applyMiddleware
    const logger = reduxLogger.createLogger();



    // Action types
    const BUY_CAKE = 'BUY_CAKE';
    const BUY_ICECREAM = 'BUY_ICECREAM';

    // Action creators
    function buyCake() {
        return {
            type: BUY_CAKE,
            info: 'First redux action'
        };
    }

    function buyIceCream() {
        return {
            type: BUY_ICECREAM,
            info: '2nd redux action '
        };
    }

    // Initial states
    const initialCakeState = {
        numOfCakes: 10
    };

    const initialIceCreamState = {
        numOfIceCream: 20
    };

    // Reducers
    const cakeReducer = (state = initialCakeState, action) => {
        switch (action.type) {
            case BUY_CAKE:
                return {
                    ...state,
                    numOfCakes: state.numOfCakes - 1
                };
            default:
                return state;
        }
    };

    const iceCreamReducer = (state = initialIceCreamState, action) => {
        switch (action.type) {
            case BUY_ICECREAM:
                return {
                    ...state,
                    numOfIceCream: state.numOfIceCream - 1
                };
            default:
                return state;
        }
    };

    // Combine the reducers using combineReducers
    const rootReducer = combineReducers({
        cake: cakeReducer,
        iceCream: iceCreamReducer
    });

    // Create store
    const store = createStore(rootReducer, applyMiddleware(logger));

    console.log('Initial state', store.getState());

    const unsubscribe = store.subscribe(() => { })

    // Dispatch actions
    store.dispatch(buyCake());
    store.dispatch(buyCake());
    store.dispatch(buyIceCream());
    store.dispatch(buyIceCream());
    store.dispatch(buyCake());

    unsubscribe();
