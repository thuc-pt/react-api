import * as types from '../constants/ActionTypes';

var initState = [];

var products = (state = initState, action) => {
  switch(action.type) {
    case types.PULL_PRODUCTS:
      state = action.products
      return [...state]
    case types.DELETE_PRODUCT:
      let index = state.findIndex(item => {return item.id === action.id})
      if (index > -1) state.splice(index, 1)
      return [...state]
    default:
      return [...state]
  }
};

export default products;