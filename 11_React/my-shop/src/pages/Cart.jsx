import { Table, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { selectCartList, increaseCount, decreaseCount,removeItemFromCart } from "../features/cart/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartList = useSelector(selectCartList);
  console.log(cartList);

  const formatter = new Intl.NumberFormat('ko-KR');

  return (
    <>
      {/* 표 레이아웃 만들기 */}
      <Table hover>
        <thead>
          <tr>
            <th>No</th>
            <th>상품명</th>
            <th>수량</th>
            <th>가격</th>
            <th>삭재</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>1</td>
            <td>라켓</td>
            <td>2</td>
            <td>199,000원</td>
          </tr> */}

          {/* Quiz: cartList 반복 렌더링 및 데이터 바인딩 */}
          {cartList.map((cart, index) => {
            return (
              <tr key={cart.id}>
                <td>{index + 1}</td>
                <td>{cart.title}</td>
                <td>
                  {/* 수량 감소 버튼 */}
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => dispatch(decreaseCount(cart.id))}
                  >
                    -
                  </Button>
                  {cart.count}
                  {/* 수량 증가 버튼 */}
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => dispatch(increaseCount(cart.id))}
                  >
                    +
                  </Button>
                </td>
                <td>{formatter.format(cart.price * cart.count)}원</td>

                <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => dispatch(removeItemFromCart(cart.id))}
                  >
                    X
                  </Button>
              </tr>
            );
          })}
          {/* 합계 구하기 */}
          <tr>
            <th>합계</th>
            <td></td>
            <td></td>
            <th>
              {formatter.format(cartList.reduce((prev, cartItem) => {
                console.log(prev); // 주의: 초기값이 없으면 배열 인덱스 0이 초기값으로 사용됨
                return prev + (cartItem.price * cartItem.count);
              }, 0))}원
            </th>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Cart;