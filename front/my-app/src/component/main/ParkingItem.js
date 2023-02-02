import React from 'react';
import PropTypes from 'prop-types';

ParkingItem.propTypes = {
    parkInfo: PropTypes.object,
};

function ParkingItem(props) {
    return (
        <tr>
            <td>{props.parkInfo.authType}</td>
            <td>{props.parkInfo.plcType}</td>
            <td>{props.parkInfo.title}</td>
            <td>{props.parkInfo.addr}</td>
            <td>{props.parkInfo.isPay}</td>
        </tr>
    );
}

export default ParkingItem;