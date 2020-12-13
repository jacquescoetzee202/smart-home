import initialState from "./initial";

// Reducer functions
const incrementTemp = ( state, { step } ) => {
    
    let targetTemp = state.targetTemp + step;

    let heatingOn = targetTemp > state.currentTemp;

    return {
        ...state,
        targetTemp,
        heatingOn,
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