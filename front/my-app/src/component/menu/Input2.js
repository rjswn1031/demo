import React, {useState} from "react";

const Input2 = () => {

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        tel: ""
    });

    const {name, email, tel} = inputs;

    const onChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;

        /* inputs[id] = value; */

        setInputs({
            ...inputs,
            [id]:value
        })
    }



    return (
        <div>
            <div>
                <lebel>이름</lebel>
                <input type="text" id="name" value={name} onChange={onChange} />
            </div>
            <div>
                <lebel>이메일</lebel>
                <input type="email" id="email" value={email} onChange={onChange} />
            </div>
            <div>
                <lebel>전화번호</lebel>
                <input type="tel" id="tel" value={tel} onChange={onChange} />
            </div>
            <p>Name:{name}</p>
            <p>Email:{email}</p>
            <p>Tel:{tel}</p>
        </div>

    )
}

export default Input2; 