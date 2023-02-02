import Map from './Map'
import { useState } from 'react'

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

    const testParks = [
        { title: 'test1', authType: '공영', plcType: '노상', addr: '대전 광역시 중구', isPay: '유료' },
        { title: 'test2', authType: '공영', plcType: '노상', addr: '대전 광역시 서구', isPay: '혼합' },
        { title: 'test3', authType: '민영', plcType: '부설', addr: '대전 광역시 서구', isPay: '무료' },
        { title: 'test4', authType: '민영', plcType: '노외', addr: '대전 광역시 동구', isPay: '유료' },
        { title: 'test5', authType: '공영', plcType: '노상', addr: '대전 광역시 서구', isPay: '무료' },
        { title: 'test6', authType: '공영', plcType: '노상', addr: '대전 광역시 동구', isPay: '유료' },
        { title: 'test7', authType: '공영', plcType: '노상', addr: '대전 광역시 대덕구', isPay: '유료' },
        { title: 'test8', authType: '민영', plcType: '부설', addr: '대전 광역시 서구', isPay: '혼합' },
        { title: 'test9', authType: '공영', plcType: '노상', addr: '대전 광역시 중구', isPay: '무료' },
        { title: 'test10', authType: '민영', plcType: '노상', addr: '대전 광역시 대덕구', isPay: '유료' },
        { title: 'test11', authType: '민영', plcType: '노상', addr: '대전 광역시 서구', isPay: '유료' },
        { title: 'test12', authType: '공영', plcType: '노외', addr: '대전 광역시 유성', isPay: '무료' },
        { title: 'test13', authType: '공영', plcType: '노상', addr: '대전 광역시 유성', isPay: '혼합' },
        { title: 'test14', authType: '민영', plcType: '부설', addr: '대전 광역시 서구', isPay: '유료' },
        { title: 'test15', authType: '공영', plcType: '노상', addr: '대전 광역시 중구', isPay: '무료' },
        { title: 'test16', authType: '민영', plcType: '노외', addr: '대전 광역시 동구', isPay: '유료' },
        { title: 'test17', authType: '공영', plcType: '노상', addr: '대전 광역시 서구', isPay: '유료' },
        { title: 'test18', authType: '공영', plcType: '노상', addr: '대전 광역시 서구', isPay: '무료' },
        { title: 'test19', authType: '공영', plcType: '노상', addr: '대전 광역시 중구', isPay: '유료' },
        { title: 'test20', authType: '공영', plcType: '노상', addr: '대전 광역시 서구', isPay: '혼합' },
        { title: 'test21', authType: '민영', plcType: '부설', addr: '대전 광역시 서구', isPay: '무료' },
        { title: 'test22', authType: '민영', plcType: '노외', addr: '대전 광역시 동구', isPay: '유료' },
        { title: 'test25', authType: '공영', plcType: '노상', addr: '대전 광역시 서구', isPay: '무료' },
        { title: 'test26', authType: '공영', plcType: '노상', addr: '대전 광역시 동구', isPay: '유료' },
        { title: 'test27', authType: '공영', plcType: '노상', addr: '대전 광역시 대덕구', isPay: '유료' },
        { title: 'test28', authType: '민영', plcType: '부설', addr: '대전 광역시 서구', isPay: '혼합' },
        { title: 'test29', authType: '공영', plcType: '노상', addr: '대전 광역시 중구', isPay: '무료' },
        { title: 'test30', authType: '민영', plcType: '노상', addr: '대전 광역시 대덕구', isPay: '유료' },
        { title: 'test31', authType: '민영', plcType: '노상', addr: '대전 광역시 서구', isPay: '유료' },
        { title: 'test32', authType: '공영', plcType: '노외', addr: '대전 광역시 유성', isPay: '무료' },
        { title: 'test33', authType: '공영', plcType: '노상', addr: '대전 광역시 유성', isPay: '혼합' },
        { title: 'test34', authType: '민영', plcType: '부설', addr: '대전 광역시 서구', isPay: '유료' },
        { title: 'test35', authType: '공영', plcType: '노상', addr: '대전 광역시 중구', isPay: '무료' },
        { title: 'test36', authType: '민영', plcType: '노외', addr: '대전 광역시 동구', isPay: '유료' },
        { title: 'test37', authType: '공영', plcType: '노상', addr: '대전 광역시 서구', isPay: '유료' },
        { title: 'test38', authType: '공영', plcType: '노상', addr: '대전 광역시 서구', isPay: '무료' },
        { title: 'test41', authType: '공영', plcType: '노상', addr: '대전 광역시 중구', isPay: '유료' },
        { title: 'test42', authType: '공영', plcType: '노상', addr: '대전 광역시 서구', isPay: '혼합' },
        { title: 'test43', authType: '민영', plcType: '부설', addr: '대전 광역시 서구', isPay: '무료' },
        { title: 'test44', authType: '민영', plcType: '노외', addr: '대전 광역시 동구', isPay: '유료' },
        { title: 'test45', authType: '공영', plcType: '노상', addr: '대전 광역시 서구', isPay: '무료' },
        { title: 'test46', authType: '공영', plcType: '노상', addr: '대전 광역시 동구', isPay: '유료' },
        { title: 'test47', authType: '공영', plcType: '노상', addr: '대전 광역시 대덕구', isPay: '유료' },
        { title: 'test48', authType: '민영', plcType: '부설', addr: '대전 광역시 서구', isPay: '혼합' },
        { title: 'test49', authType: '공영', plcType: '노상', addr: '대전 광역시 중구', isPay: '무료' },
        { title: 'test50', authType: '민영', plcType: '노상', addr: '대전 광역시 대덕구', isPay: '유료' },
        { title: 'test51', authType: '민영', plcType: '노상', addr: '대전 광역시 서구', isPay: '유료' },
        { title: 'test52', authType: '공영', plcType: '노외', addr: '대전 광역시 유성', isPay: '무료' },
        { title: 'test53', authType: '공영', plcType: '노상', addr: '대전 광역시 유성', isPay: '혼합' },
        { title: 'test54', authType: '민영', plcType: '부설', addr: '대전 광역시 서구', isPay: '유료' },
        { title: 'test55', authType: '공영', plcType: '노상', addr: '대전 광역시 중구', isPay: '무료' },
        { title: 'test56', authType: '민영', plcType: '노외', addr: '대전 광역시 동구', isPay: '유료' },
        { title: 'test57', authType: '공영', plcType: '노상', addr: '대전 광역시 서구', isPay: '유료' },
        { title: 'test58', authType: '공영', plcType: '노상', addr: '대전 광역시 서구', isPay: '무료' },
    ]

    const [onIdx, setOnIdx] = useState(0);
    const [areas] = useState(areaList);
    const [parks, setParks] = useState(testParks);
    
    const areaBtnClick = (idx) => {
        let addrs = testParks.filter(x => x.addr.indexOf(areaList[idx]) !== -1);

        setOnIdx(idx);
        setParks(idx === 0 ? testParks : addrs);
    }

    return (
        <div id="mainContainer">
            <Map />
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
                        {/* <colgroup>
                            <col width="10"/>
                            <col width="10"/>
                            <col width="20"/>
                            <col width="50"/>
                            <col width="10"/>
                        </colgroup> */}
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
                        {/* <colgroup>
                            <col width="10"/>
                            <col width="10"/>
                            <col width="20"/>
                            <col width="50"/>
                            <col width="10"/>
                        </colgroup> */}
                        <tbody>
                            {parks.map(park => <ParkingItem key={park.title} parkInfo={park} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Main;