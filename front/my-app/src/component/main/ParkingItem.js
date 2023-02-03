import React from 'react';
import PropTypes from 'prop-types';

ParkingItem.propTypes = {
    parkInfo: PropTypes.object,
};

function ParkingItem(props) {
    return (
        <tr>
            <td>{props.parkInfo.prkplceSe}</td>
            <td>{props.parkInfo.prkplceType}</td>
            <td>{props.parkInfo.prkplceNm}</td>
            <td>{props.parkInfo.lnmAdr}</td>
            <td>{props.parkInfo.parkingChrgeInfo}</td>
        </tr>
    );
}

export default ParkingItem;