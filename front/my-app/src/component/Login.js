import {React, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { setLoginToken } from '../slice/loginSlice'

import '../css/login.css'

function Login(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginHandler = () => {
        //POST 요청 전송
        axios({
            method: 'post',
            url: 'http://localhost:8081/members/login',
            data: {'memId': textId,'memPass': textPass},
            headers: {'Accept':'application/json','Content-Type':'application/json'},
        })
        .then(r => {
            console.log(r)
            dispatch(setLoginToken(r.data.accessToken));
            if(r && r.status === 200) {
                navigate('/main/main');
            }
        });
    }

    const [textId, setTextId] = useState('');
    const [textPass, setTextPass] = useState('');

    return (
        <div id='loginWrap'>
            <div id='loginContainer'>
                <p>Login</p>
                <table>
                    <tbody>
                        <tr>
                            <td>ID :</td>
                            <td><input type={'text'} onChange={(e)=>{setTextId(e.target.value)}}></input></td>
                        </tr>
                        <tr>
                            <td>PASSWORD :</td>
                            <td><input type={'password'} onChange={(e)=>{setTextPass(e.target.value)}}></input></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><button onClick={loginHandler}>LOGIN</button></td> 
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Login;