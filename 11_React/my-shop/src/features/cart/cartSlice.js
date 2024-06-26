import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [
    {
      id: '1',
      title: "Arcsaber 11 Pro",
      price: 299000,
      count: 2
    },
    {
      id: '3',
      title: "Aerus Z",
      price: 199000,
      count: 1
    },
  ]
};

// 장바구니 정보를 담을 slice 만들기
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // 수량을 변경하는 리듀서 만들기
    // 전달받은 상품의 id값으로 cartList에서 해당 상품을 찾아 수량을 1씩 증가,감소
    increaseCount: (state, { payload: id }) => {
      const item = state.cartList.find(product => product.id === id);
      if (item) {
        item.count += 1;
      }
    },
    decreaseCount: (state, { payload: id }) => {
      const item = state.cartList.find(product => product.id === id);
      if (item && item.count > 0) {
        item.count -= 1;
      }
    },
    // 상품객체로 넘겨주면 cartList에 아이템을 추가하는 리듀서 만들기.
    // 이미 장바구니에 들어있는 상품이면 수량만 증가.
    // 없는 상품이면 새롭게 추가
    addItemToCart: (state, { payload: product }) => {
      const existingItem = state.cartList.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.count += product.count;
      } else {
        state.cartList.push(product);
      }
    },

    // QUIZ: 장바구니에서 삭제하는 리듀서 만들기
    removeItemFromCart: (state, { payload: id }) => {
      state.cartList = state.cartList.filter(item => item.id !== id);
    }
  }
});

export const { increaseCount, decreaseCount, addItemToCart, removeItemFromCart   } = cartSlice.actions;
export const selectCartList = state => state.cart.cartList;

export default cartSlice.reducer;