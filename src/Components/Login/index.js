import React from 'react';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

import LoginContainer from "./style"
import logo from '../../assets/logo.svg';

export default function Login() {

    const navigate = useNavigate();
    const [data, setData] = useState({ email: null, password: null });
    const API = 'http://localhost:5000';

    function HandleSubmit(e) {

        e.preventDefault();

        axios.post(`${API}/login`, data).then(res => {

            localStorage.setItem('owner', res.data.owner);
            localStorage.setItem('device', res.data.token);
            localStorage.setItem('name', res.data.name);

            return navigate('/home');

        }).catch(err => alert(err.response.data));
    }

    return (
        <LoginContainer>
            <div className="items">
                <img src={logo}></img>
                <h1>SmartStore</h1>
                <form onSubmit={HandleSubmit}>
                    <input type='text' placeholder='email' required
                        onChange={e => setData({ ...data, email: e.target.value })} />
                    <input type='password' placeholder='password' required
                        onChange={e => setData({ ...data, password: e.target.value })} />
                    <button type='submit'>Sign In</button>
                    <Link to='/register'>Don't have an account? Sign-Up !</Link>
                </form>
            </div>
        </LoginContainer>
    )
}