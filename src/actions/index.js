import * as types from '../constants/ActionTypes';
import CallApi from '../utils/ApiCaller';

export const pullProducts = (products) => {
  return {
    type: types.PULL_PRODUCTS,
    products
  }
};

export const requestPullProducts = () => {
  return (dispatch) => {
    return CallApi('products').then(response => {dispatch(pullProducts(response.data))})
  }
};

export const deleteProduct = (id) => {
  return {
    type: types.DELETE_PRODUCT,
    id
  }
};

export const requestDeleteProduct = (id) => {
  return (dispatch) => {
    return CallApi('products/' + id, null, 'DELETE').then(response => {dispatch(deleteProduct(id))})
  }
};

export const createProduct = (product) => {
  return {
    type: types.CREATE_PRODUCT,
    product
  }
};

export const requestCreateProduct = (product) => {
  return (dispatch) => {
    return CallApi('products/', product, 'POST').then(response => {dispatch(createProduct(response.data))})
  }
};

export const editProduct = (product) => {
  return {
    type: types.EDIT_PRODUCT,
    product
  }
};

export const requestEditProduct = (id) => {
  return (dispatch) => {
    return CallApi('products/' + id).then(response => {dispatch(editProduct(response.data))})
  }
};

export const updateProduct = (product) => {
  return {
    type: types.UPDATE_PRODUCT,
    product
  }
};

export const requestUpdateProduct = (product) => {
  return (dispatch) => {
    return CallApi('products/' + product.id, product, 'PUT').then(response => {dispatch(updateProduct(product))})
  }
};