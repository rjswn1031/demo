import { useState, useEffect } from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'

import Map from './Map'
import AreaButton from './AreaButton'
import ParkingItem from './ParkingItem'

import '../../css/main.css'

function Main(props) {
    const areaList = [
        '전체',
        '대덕구',
        '동구',
        '서구',
        '유성',
        '중구',
    ];


    const parkingList = [];
    const parkingListUpdate = [];

    //useEffect 컴포넌트 업데이트 시 계속 불러짐
    //정리 필요
    useEffect(()=>{
        fetch('http://localhost:8081/getParkingList')
        .then(res => res.json())
        .then(result => { 
            setParks(result); 
            setParksUpdate(result);
        })
    }, [])

    const [onIdx, setOnIdx] = useState(0);
    const [areas] = useState(areaList);
    const [parks, setParks] = useState(parkingList);
    const [parksUpdate, setParksUpdate] = useState(parkingListUpdate);

    const areaBtnClick = (idx) => {
        let addrs = parks.filter(x => x.lnmAdr.indexOf(areaList[idx]) !== -1);
        setOnIdx(idx);
        setParksUpdate(idx === 0 ? parks : addrs);
    }

    return (
        <div id="mainContainer">
            <Map parkings={parks} />
            <div id='typeContainer' className='card'>
                <p className='cardTitle'>지역선택</p>
                <ul>
                    { areas.map((area, idx) => 
                        <AreaButton key={area} onIdx={onIdx === idx ? 'on' : ''} title={area} btnClick={()=>{areaBtnClick(idx)}} />) 
                    }
                </ul>
            </div>
            <div id='detailContainer' className='card'>
                <p className='cardTitle'>상세보기</p>
                <div id='tableHeadWrap'>
                    <table>
                        <thead>
                            <tr>
                                <th>구분</th>
                                <th>형태구분</th>
                                <th>주차장명</th>
                                <th>주소</th>
                                <th>결제여부</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div id='tableBodyWrap'>
                    <table>
                        <tbody>
                            {parksUpdate.map(park => <ParkingItem key={park.prkplceNo} parkInfo={park} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Main;