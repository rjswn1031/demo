import React from 'react';
import axios from 'axios'

import '../css/login.css'

function Login(props) {

    const loginTest = () => {
        // POST 요청 전송
        axios.post('http://localhost:8081/members/test', 
        { 
            'memId': 'test123', 'memPass': 'test123'
        },
        {
            headers: {
                'Accept': 'application/json', 'Content-Type': 'application/json'
                ,'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MTIzIiwiYXV0a…I0Nn0.vmU-TWAzo1M0rWQbFu7kZMRt-Yi0L_QBMVuGN4dIYys'
            }
        },
        )
        /* axios({
            method: 'post',
            url: 'http://localhost:8081/members/test',
            {header: ''}
        }); */
        /* fetch('http://localhost:8081/members/test',{
            method: 'POST',
            headers: {
                'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MTIzIiwiYXV0a…I0Nn0.vmU-TWAzo1M0rWQbFu7kZMRt-Yi0L_QBMVuGN4dIYys',
                'Content-Type': 'charset=UTF-8'
            }
        }).then(r=>r.text()).then(result=>console.log(result)); */
    }
    return (
        <div id='loginWrap'>
            <div id='loginContainer'>
                <p>Login</p>
                <table>
                    <tbody>
                        <tr>
                            <td>ID :</td>
                            <td><input type={'text'}></input></td>
                        </tr>
                        <tr>
                            <td>PASSWORD :</td>
                            <td><input type={'password'}></input></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><button onClick={loginTest}>LOGIN</button></td> 
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Login;