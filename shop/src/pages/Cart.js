import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export const Cart = () => {
    let cartData = useSelector((state) => state.cartData);
    console.log(cartData);
    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                {cartData.map((a, i) => {
                    return (
                        <tr key={i}>
                            <td>{a.id}</td>
                            <td>{a.name}</td>
                            <td>{a.count}</td>
                            <td></td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};

export default Cart;
