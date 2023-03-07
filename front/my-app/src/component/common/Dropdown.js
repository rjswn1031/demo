import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../css/common.css'

Dropdown.propTypes = {
    list: PropTypes.array,
    checkSelected: PropTypes.func
}

function Dropdown(props) {
    const dropListClickHandler = (item) => {
        props.checkSelected(item.value);
        setDropTitle(item.title);
        setIsListOn(!isListOn);
    }

    const [isListOn, setIsListOn] = useState(false);
    const [dropTitle, setDropTitle] = useState(props.list[0].title);
    return (
        <div className='dropContainer'>
            <div onClick={() => { setIsListOn(!isListOn) }} className='dropMain'>
                <span>{dropTitle}</span>
                <FontAwesomeIcon icon={`fa-solid fa-angle-${isListOn ? 'up' : 'down'}`} />
            </div>
            <ul className={`dropList ${isListOn ? 'on' : ''}`}>
                {props.list.map(x => <li key={x.value} onClick={()=>{ dropListClickHandler(x) }}>{x.title}</li>)}
            </ul>
        </div>
    );
}

Dropdown.propType = {

}

export default Dropdown;