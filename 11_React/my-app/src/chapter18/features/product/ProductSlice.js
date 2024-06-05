import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    productList: [],
  },
  reducers: {
    addToProductList: (state, action) => {
      state.productList.push(action.payload);
    },
    removeFirstProduct: (state) => {
      state.productList.shift();
    },
  },
});

export const { addToProductList, removeFirstProduct } = productSlice.actions;
export default productSlice.reducer;
