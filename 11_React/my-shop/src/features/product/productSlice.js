import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  productList:[],
  selectedProduct:null,
};

// 상품 정보를 담을 slice만들기
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers:{
    getAllProducts:(state, action) =>{
    },
    selectProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  }
});

// 리듀서 함수들
export default productSlice.reducer;
export const { getAllProducts, selectProduct } = productSlice.actions;
