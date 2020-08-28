import React from 'react';

function Products(props) {
  return (
    <div className="card mgt-25">
      <div className="card-header bg-success text-white">
        <strong>Danh sách sản phẩm</strong>
      </div>
      <div className="card-body">
        <table className="table">
          <thead>
            <tr className="text-center">
              <th>STT</th>
              <th>Tên sản phẩm</th>
              <th>Đơn giá</th>
              <th>Tình trạng</th>
              <th>Hoạt động</th>
            </tr>
          </thead>
          <tbody>
            {props.children}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;
