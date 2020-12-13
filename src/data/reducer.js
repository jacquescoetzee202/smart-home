import initialState from "./initial";

// Reducer functions
const incrementTemp = ( state, { step } ) => {

    return {
        ...state,
        targetTemp: state.targetTemp + step,
    }
};

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_HTG": return incrementTemp( state, action );
    case "RESET": return initialState;
    default : return state;
  }
};

export default reducer;