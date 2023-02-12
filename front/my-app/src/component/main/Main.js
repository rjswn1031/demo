import { useState, useEffect } from 'react'

import Map from './Map'
import AreaButton from './AreaButton'
import ParkingItem from './ParkingItem'
import Search from './option/Search'

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

            //prkplceSe prkplceType parkingChrgeInfo
            let optionObj = {};
            optionObj.se = [...new Set(result.map(x=>x.prkplceSe))];
            optionObj.plType = [...new Set(result.map(x=>x.prkplceType))];
            optionObj.chrge = [...new Set(result.map(x=>x.parkingChrgeInfo))];

            setSearchOption({...searchOption, se: optionObj.se[0], plType: optionObj.plType[0], chrge: optionObj.chrge[0]})
            setCtgType(optionObj);
        })
    }, [])

    const clickAreaBtn = (idx) => {
        let addrs = parks.filter(x => x.lnmAdr.indexOf(areaList[idx]) !== -1);
        setOnIdx(idx);
        setParksUpdate(idx === 0 ? parks : addrs);
    }
    
    const searchBtnClickHandler = () => {
        let addrs = onIdx === 0 ? parks : parks.filter(x => x.lnmAdr.indexOf(areaList[onIdx]) !== -1);
        //setParksUpdate(onIdx === 0 ? parks : addrs);

        //console.log(addrs)

        Object.keys(stateCheckBox).forEach((key) => {
            if(stateCheckBox[key]) {
                console.log(key)
                let parseKey = '';

                switch (key) {
                    case 'se': parseKey = 'prkplceSe'; break;
                    case 'plType': parseKey = 'prkplceType'; break;
                    case 'chrge': parseKey = 'parkingChrgeInfo'; break;
                    case 'plName': parseKey = 'prkplceNm'; break;
                    case 'addr': parseKey = 'lnmAdr'; break;
                    default: parseKey = 'lnmAdr'; break;
                }
                addrs = addrs.filter(x => x[parseKey].indexOf(searchOption[key]) !== -1);
            }
        });
        
        setParksUpdate(addrs);
    }

    const [onIdx, setOnIdx] = useState(0);
    const [areas] = useState(areaList);
    const [ctgType, setCtgType] = useState({})
    const [parks, setParks] = useState(parkingList);
    const [parksUpdate, setParksUpdate] = useState(parkingListUpdate);
    const [stateCheckBox, setStateCheckBox] = useState({
        se: false,
        plType: false,
        chrgeL: false,
        plName: false,
        addr: false
    });

    const [searchOption, setSearchOption] = useState({
        se: 0,
        plType: 0,
        chrge: 0,
        plName: '',
        addr: ''
    });

    return (
        <div id="mainContainer">
            <Map parkings={parks} />
            <div id='optionContainer'>
                <div id='optSelectContainer' className='card'>
                    <p className='cardTitle'>지역선택</p>
                    <ul>
                        { areas.map((area, idx) => 
                            <AreaButton key={area} onIdx={onIdx === idx ? 'on' : ''} title={area} btnClick={()=>{clickAreaBtn(idx)}} />) 
                        }
                    </ul>
                </div>
                <div id='optSearchContainer' className='card'>
                    <p className='cardTitle'>검색</p>
                    <Search ctgType={ctgType} stateCheckBox={stateCheckBox} searchOption={searchOption} setStateCheckBox={setStateCheckBox} setSearchOption={setSearchOption}></Search>
                    <button onClick={()=>{searchBtnClickHandler()}}>검색</button>
                </div>
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