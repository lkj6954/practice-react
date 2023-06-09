import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Tab } from './Tab.js';
import { useDispatch } from 'react-redux';
import { addCart } from '../store.js';

function Detail({ data, imgSrc }) {
    let { dataId } = useParams();
    let [alert, setAlert] = useState(true);
    let [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        if (isNaN(inputValue)) {
            window.alert('숫자만 입력하세요');
        }
    }, [inputValue]);

    useEffect(() => {
        setTimeout(() => {
            setAlert(false);
        }, 2000);
    });

    // let foundObjectOfData = props.data.find((obj) => obj.id === Number(dataId));
    let foundObjectOfData = data.find((obj) => obj.id === Number(dataId));

    return (
        <div className='container'>
            {foundObjectOfData ? (
                <>
                    {alert === true ? (
                        <div className='time-sale'>
                            2초 이내 구매시 추가 할인
                        </div>
                    ) : null}
                    <input
                        type='text'
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />

                    <div className='row'>
                        <div className='col-md-6'>
                            <img
                                // src={props.imgSrc[dataId]}
                                src={imgSrc[dataId]}
                                width='100%'
                                alt='shoes'
                            />
                        </div>
                        <div className='col-md-6'>
                            <h4 className='pt-5'>{foundObjectOfData.title}</h4>
                            <p>{foundObjectOfData.content}</p>
                            <p>{foundObjectOfData.price}</p>
                            <button
                                className='btn btn-danger'
                                onClick={() => {
                                    dispatch(addCart(foundObjectOfData));
                                }}
                            >
                                주문하기
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <h4>일치하는 상품 id가 없습니다.</h4>
            )}
            <Tab foundObjectOfData={foundObjectOfData} />
        </div>
    );
}

export default Detail;
