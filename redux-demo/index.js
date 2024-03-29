const redux = require("redux");

const createStore = redux.createStore;
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
};
const restockCake = (qty = 1 ) => {
  return {
    type: CAKE_RESTOCKED,
    quantity: qty,
  };
};

//(previousState, action)=> newState
const initialstate = {
  numOfCakes: 10,
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
      case CAKE_RESTOCKED:
        return {
          ...state,
          numOfCakes: state.numOfCakes + action.quantity
        }

    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("pdate state", store.getState())
);
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
unsubscribe();
