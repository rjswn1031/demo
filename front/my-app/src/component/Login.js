import React from 'react';

import '../css/login.css'

function Login(props) {
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
                            <td colSpan={2}><button>LOGIN</button></td> 
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Login;