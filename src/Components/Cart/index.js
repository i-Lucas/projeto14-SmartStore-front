import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

import CartContainer from "./style"
import background from '../../assets/background.jpg';

export default function Cart() {

    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

    // const API = `http://localhost:5000`;
    const API = 'https://smartstore10.herokuapp.com';

    const header = { headers: { "Authorization": `Bearer ${localStorage.getItem('device')}` } }

    useEffect(() => {

        axios.get(`${API}/cart${localStorage.getItem('owner')}`,).then(res => {

            setCart(res.data);

        }).catch(err => {
            console.log(err.response.data);
        });
    }, []);

    function MapCartProducts() {

        return cart.map((prd, i) => {

            return (
                <RenderCartProduct
                    key={i} id={prd._id} name={prd.productName} price={prd.productPrice}
                    date={prd.productDate} time={prd.productTime} img={prd.productImage} />
            )
        })
    }

    function RenderCartProduct({ name, price, date, time, img, id }) {

        return (
            <div className='product'>
                <div className='product-image'>
                    <img src={img}></img>
                </div>
                <div className='product-info'>
                    <div className='product-name'><h1>{name}</h1><ion-icon onClick={() => RemoveProductFromCart(id)} name="trash-outline"></ion-icon></div>
                    <div className='product-price'><h1>R$: {price}</h1></div>
                    <div className='product-date'><h1>{date} {time}</h1></div>
                </div>
            </div>
        )
    }

    function RemoveProductFromCart(id) {

        const confirm = window.confirm("Tem certeza que deseja remover o produto do carrinho ?");
        if (confirm) {
            axios.delete(`${API}/cart${id}`).then(res => {
                alert('Produto removido com sucesso!');
                setCart(cart.filter(item => item._id !== id))
            }).catch(err => {
                alert('Erro ao remover produto do carrinho!')
                console.log(err.response.data)
            });
        }
    }

    return (

        <CartContainer background={background}>

            <div className='header'>
                <div className='title'>
                    <h1>Carrinho de Compras</h1>
                    <ion-icon name="cart-outline"></ion-icon>
                </div>
                <div className='back' onClick={() => navigate('/home')}>
                    <ion-icon name="return-up-back-outline"></ion-icon>
                </div>
            </div>

            <div className='content-container'>
                <MapCartProducts />
            </div>

            <div className='finalize-purchase'>

                <div className='total-products'>
                    <h1>Total de Produtos: {cart.length}</h1>
                </div>

                <div className='total-price'>
                    <h1>Total: R$: {cart.reduce((acc, item) => acc + parseInt(item.productPrice), 0)}</h1>
                </div>

                <button onClick={() => alert('Obrigado por utilizar nosso APP !!\n\nFique a vontade para dar seu feedback')}>Finalizar Compra</button>
            </div>
        </CartContainer>
    )
}