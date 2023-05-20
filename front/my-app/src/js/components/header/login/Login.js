import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Login = () => {
    return (
        <div className='login_info'>
            <Button variant="contained">
            <Link to="/login">로그인</Link>

            </Button>
        </div>
    );
};

export default Login;