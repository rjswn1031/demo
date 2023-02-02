import Map from './Map'

import '../../css/main.css'

function Main(props) {
    return (
        <div id="mainContainer">
            <Map />
            <div id='typeContainer'>
                <p>지역선택</p>
            </div>
            <div id='detailContainer'>
                <p>상세보기</p>
            </div>
        </div>
    );
}

export default Main;