import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToProductList } from './ProductSlice';

function ProductList() {
  const [productName, setProductName] = useState('');
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);

  const handleAddProduct = () => {
    if (productName.trim() !== '') {
      dispatch(addToProductList(productName));
      setProductName('');
    }
  };

  return (
    <>
      <p>
        상품추가 :
        <input 
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <button 
          type="button"
          onClick={handleAddProduct}
        >
          추가
        </button>
      </p>
      <p>상품목록</p>
      <ul>
        {productList.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </>
  );
}

export default ProductList;
