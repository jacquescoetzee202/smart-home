import initialState from "./initial";

// Reducer functions
const increaseTemp = state => (
    {
        ...state,
        tartgetTemp: state.tartgetTemp + 1,
    }
);

const decreaseTemp = state => (
    {
        ...state,
        tartgetTemp: state.tartgetTemp - 1,
    }
);


// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "HTG_INCREASE": return increaseTemp(state);
    case "HTG_DECREASE": return decreaseTemp(state);
    case "RESET": return initialState;
    default : return state;
  }
};

export default reducer;