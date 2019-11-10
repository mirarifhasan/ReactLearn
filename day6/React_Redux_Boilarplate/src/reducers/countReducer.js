import {ADD,SUB,RESTART} from '../actions/types'

const initialState = {
  count: 0
};

function countReducer(state = initialState, action) {
  switch (action.type) {
    case ADD: {
            return {
               
        count: state.count + 1
      };
    }
    case RESTART: {
            return {
        count: 0
      };
    }
    case SUB: {
      if (state.count > 0) {
           return {
          count: state.count - 1
        };
      }
    }
     default:
            return state
  }
}

export default countReducer;
