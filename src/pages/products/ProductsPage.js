import React, {useEffect} from 'react';
import AddBtn from '../../components/products/AddBtn';
import Products from '../../components/products/Products'
import Product from '../../components/products/Product';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';

function ProductsPage(props) {
  let {getProductsList, products, deleteProduct, getProductEdit} = props;

  useEffect(() => {
    getProductsList()
  }, [getProductsList]);

  function showProductItem(products) {
    let results = null;
    if (products.length > 0) {
      results = products.map((product, index) => {
        return <Product key={index} stt={index} product={product} onListenDelete={onDeleteProduct} onListenEdit={onEditProduct} />
      })
    }
    return results;
  }

  function onDeleteProduct(id) {
    if (confirm('Bạn chắc chắn muốn xóa')) // eslint-disable-line
      deleteProduct(id)
  }

  function onEditProduct(id) {
    getProductEdit(id)
  }

  return (
    <div className="container">
      <AddBtn />
      <Products>
        {showProductItem(products)}
      </Products>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductsList: () => {
      dispatch(actions.requestPullProducts())
    },
    deleteProduct: (id) => {
      dispatch(actions.requestDeleteProduct(id))
    },
    getProductEdit: (id) => {
      dispatch(actions.requestEditProduct(id))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);