import React from 'react';
import ClassNames from 'classnames';
import {Link} from 'react-router-dom';

function Product(props) {
  let {stt, product} = props;

  function onDeleteProduct(id) {
    props.onListenDelete(id)
  };

  function onEditProduct(id) {
    props.onListenEdit(id)
  };

  return (
    <tr className="text-center">
      <td>{stt + 1}</td>
      <td>{product.name}</td>
      <td>{product.price.toLocaleString()}</td>
      <td>
        <span className={ClassNames('badge badge-pills', product.status ? 'badge-success' : 'badge-danger')}>
          {product.status ? 'Còn hàng' : 'Hết hàng'}
        </span>
      </td>
      <td>
        <Link to={"products/" + product.id + "/edit"} onClick={() => onEditProduct(product.id)} className="btn btn-warning mgr-25">
          <i className="fas fa-edit mgr-5"></i>Sửa
        </Link>
        <button className="btn btn-danger" onClick={() => onDeleteProduct(product.id)}><i className="fas fa-trash-alt mgr-5"></i>Xóa</button>
      </td>
    </tr>
  );
}

export default Product;