import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

ParkingItem.propTypes = {
    parkInfo: PropTypes.object,
};

function ParkingItem(props) {
    const selectedCode = useSelector(state => state.total.parkCode);

    return (
        <tr className={props.parkInfo.prkplceNo === selectedCode ? 'on' : ''}>
            <td>{props.parkInfo.prkplceSe}</td>
            <td>{props.parkInfo.prkplceType}</td>
            <td>{props.parkInfo.prkplceNm}</td>
            <td>{props.parkInfo.lnmAdr}</td>
            <td>{props.parkInfo.parkingChrgeInfo}</td>
        </tr>
    );
}

export default ParkingItem;