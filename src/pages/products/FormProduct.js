import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';

function FormProduct(props) {
  var [id, setID] = useState('');
  var [name, setName] = useState('');
  var [price, setPrice] = useState('');
  var [status, setStatus] = useState(false);
  let {history, onCreateProduct, itemEditting, onUpdateProduct} = props;

  useEffect(() => {
    if (itemEditting) {
      setID(itemEditting.id);
      setName(itemEditting.name);
      setPrice(itemEditting.price);
      setStatus(itemEditting.status);
    }
  }, [itemEditting]);

  function onSubmitForm(event) {
    event.preventDefault();
    let product = {
      id: id,
      name: name,
      price: parseFloat(price),
      status: status
    }
    if (id)
      onUpdateProduct(product)
    else
      onCreateProduct(product);
    history.goBack();
  }

  return (
    <div className="container">
      <h2 className="text-center mgt-25">{!id ? 'Thêm Sản Phẩm' : 'Chỉnh sửa sản phẩm'}</h2>
      <div className="row">
        <div className="col-md-2 col-lg-3"></div>
        <div className="col-12 col-sm-12 col-md-8 col-lg-6">
          <form onSubmit={onSubmitForm}>
            <div className="form-group">
              <label>Tên sản phẩm</label>
              <input type="text" name="setName" className="form-control" value={name} onChange={event => setName(event.target.value)} />
            </div>
            <div className="form-group">
              <label>Đơn giá</label>
              <input type="number" name="setPrice" className="form-control" value={price} onChange={event => setPrice(event.target.value)} />
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox" name="setStatus" className="form-check-input" value={status} onChange={event => setStatus(event.target.checked)} checked={status} />Còn hàng
              </label>
            </div>
            <div className="mgt-25">
              <Link to="/products" className="btn btn-secondary mgr-25"><i className="fas fa-sign-out-alt mgr-5"></i>Quay lại</Link>
              <button type="submit" className="btn btn-success"><i className="far fa-save mgr-5"></i>Lưu lại</button>
            </div>
          </form>
        </div>
        <div className="col-md-2 col-lg-3"></div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    itemEditting: state.itemEditting
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateProduct: (product) => {
      dispatch(actions.requestCreateProduct(product))
    },
    onUpdateProduct: (product) => {
      dispatch(actions.requestUpdateProduct(product))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FormProduct);