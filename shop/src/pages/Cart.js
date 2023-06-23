import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addCnt } from '../store.js';

export const Cart = () => {
    let cartData = useSelector((state) => state.cartData);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(cartData);
    }, [cartData]);

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
                            <td>
                                <button
                                    onClick={() => {
                                        dispatch(addCnt(a.id));
                                    }}
                                >
                                    +
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};

export default Cart;
