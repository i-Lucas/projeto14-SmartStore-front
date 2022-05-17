import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

import CartContainer from "./style"
import background from '../../assets/background.jpg';

export default function Cart() {

    const navigate = useNavigate();
    const [data, setData] = useState({});
    // const API = `http://localhost:5000`;
    const API = 'https://smartstore10.herokuapp.com';

    const header = { headers: { "Authorization": `Bearer ${localStorage.getItem('device')}` } }

    useEffect(() => {

        // axios.get(`${API}/cart`, header).then(res => {

        //     setData(res.data);
        //     console.log(res.data);

        // }).catch(err => alert(err.response.data));

    }, [])

    return (

        <CartContainer background={background}>

            <div className='header'>
                <div className='title'>
                    <h1>Carrinho de Compras ( in development ) </h1>
                    <ion-icon name="cart-outline"></ion-icon>
                </div>
                <div className='back' onClick={() => navigate('/home')}>
                    <ion-icon name="return-up-back-outline"></ion-icon>
                </div>
            </div>

            <div className='content-container'>

                <div className='product'>
                    <div className='product-image'>
                        <img src='https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000'></img>
                    </div>
                    <div className='product-info'>
                        <div className='product-name'><h1>Nome</h1></div>
                        <div className='product-price'><h1>R$: 100</h1></div>
                        <div className='product-date'><h1>data</h1></div>
                    </div>
                </div>

            </div>

            <div className='finalize-purchase'>

            </div>
        </CartContainer>
    )

}