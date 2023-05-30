import { useParams } from 'react-router-dom';

function Detail(props) {
    let { dataId } = useParams();

    // props.data안의 id값이 dataId와 일치하는 object를 찾아서 item에 저장
    let foundObjectOfData = props.data.find((obj) => obj.id === Number(dataId));

    return (
        <div className='container'>
            {foundObjectOfData ? (
                <>
                    <h4>입력한값 : {dataId}</h4>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img
                                src={props.imgSrc[dataId]}
                                width='100%'
                                alt='shoes'
                            />
                        </div>
                        <div className='col-md-6'>
                            <h4 className='pt-5'>{foundObjectOfData.title}</h4>
                            <p>{foundObjectOfData.content}</p>
                            <p>{foundObjectOfData.price}</p>
                            <button className='btn btn-danger'>주문하기</button>
                        </div>
                    </div>
                </>
            ) : (
                <h4>일치하는 상품 id가 없습니다.</h4>
            )}
        </div>
    );
}

export default Detail;
