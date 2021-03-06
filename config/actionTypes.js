const actionTypes = {
  LOGIN_STARTED: 'LOGIN_STARTED',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILED: 'LOGIN_FAILED',

  LOGOUT_STARTED: 'LOGOUT_STARTED',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_FAILED: 'LOGOUT_FAILED',

  REGISTER_STARTED: 'REGISTER_STARTED',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAILED: 'REGISTER_FAILED',

  GET_LIST_PRODUCT_STARTED: 'GET_LIST_PRODUCT_STARTED',
  GET_LIST_PRODUCT_SUCCESS: 'GET_LIST_PRODUCT_SUCCESS',
  GET_LIST_PRODUCT_FAILED: 'GET_LIST_PRODUCT_FAILED',

  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_CART_ITEM: 'REMOVE_CART_ITEM',
  REDUCE_CART_ITEM: 'REDUCE_CART_ITEM',
  CLEAR_CART: 'CLEAR_CART',
};

export default actionTypes;
