import {ADD_CONTANCT} from "../action/action";

const initialState = {
    contact : {}
};

export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_CONTANCT:
        return {
          ...state,
          contact: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default contactReducer;