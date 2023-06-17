import React from 'react';
import { useState } from 'react';


function Main(props) {

    const [num,setNum] = useState(0);

    return (

        <div>
            <div>{num}</div>
            <div>
                <input type={'button'} onClick={() => setNum(num + 1)} value='+1' />
                <input type={'button'} onClick={() => setNum(num - 1)} value='-1' />
            </div>
        </div>
    );
}

export default Main;