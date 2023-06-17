import React,{useState} from "react";


const Render = () => {
    const [value , setValue] = useState();



    return(
        <div>
            <button className="square" onClick={() => {console.log('click');}}>
                {this.props.value}
            </button>
        </div>
    )
}

export default Render;


