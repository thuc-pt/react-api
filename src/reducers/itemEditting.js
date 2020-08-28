import * as types from '../constants/ActionTypes';

var initState = {
  id: '',
  name: '',
  price: '',
  status: false
};

var itemEditting = (state = initState, action) => {
  if (action.type === types.EDIT_PRODUCT)
    return action.product
  if (action.product)
    return initState
  return {...state}
}

export default itemEditting;