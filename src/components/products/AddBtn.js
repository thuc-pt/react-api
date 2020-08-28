import React from 'react';
import {Link} from 'react-router-dom';

function AddBtn() {
  return <Link to="products/new" className="btn btn-success mgt-25"><i className="fas fa-plus mgr-5"></i>Thêm sản phẩm</Link>
}

export default AddBtn;