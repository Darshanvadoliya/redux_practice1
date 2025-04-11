import { combineReducers } from "redux";

const initialState1 = { count: 0, }
const initialState2 = { count: 0, }

const counterReducer = (state = initialState1, action) => {
  if(action.type === "Increment") {
    return { count: state.count + 1, };
  }
  if(action.type === "Decrement" && state.count > 0) {
    return { count: state.count - 1, };
  }
  return state;
}

const counterReducer2 = (state = initialState2, action) => {
      switch (action.type) {
        case "inc":
          return { count: state.count + 1 };
        case "dec":
          if (state.count > 0) {
            return { count: state.count - 1 };
          }
        default:
          return state;
      }
  }

export  const rootReducer = combineReducers({
    counter: counterReducer,
    counter2: counterReducer2,
  });

