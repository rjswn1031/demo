import React, {useState} from "react";
import Button from "./Button";

const Counter =() => {
    const [num, setNumber] = useState(0);

    const increase = () => {
        setNumber(num + 1);
    }

    const decrease = () => {
        setNumber(num - 1);
    }


    return (
        <div>
            <Button t={"+1"} fc={increase}/>
            <Button t={"-1"} fc={decrease}/>
            <p>{num}</p>
        </div>
    )

}

export default Counter; 