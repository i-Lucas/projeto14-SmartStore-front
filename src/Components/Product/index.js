import React from 'react';
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import ProductContainer from './style';
import background from '../../assets/background.jpg';

export default function Product() {

    // const API = 'http://localhost:5000';
    const API = 'https://smartstore10.herokuapp.com';

    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [cart, setCart] = useState([]);

    const params = useParams();
    const productID = params.ProductID;

    useEffect(() => {

        axios.get(`${API}/product${productID}`,).then(res => {

            setProduct(res.data);

            axios.get(`${API}/cart${localStorage.getItem('owner')}`,).then(res => {

                setCart(res.data);

            });

        }).catch(err => {
            console.log(err.response.data), navigate('/home');
        });
    }, []);

    function DeleteProduct() {

        const confirm = window.confirm("Tem certeza que deseja deletar o produto?");

        if (confirm) {

            axios.delete(`${API}/product${productID}`).then(res => {

                navigate('/home');
                alert('Produto deletado com sucesso!');

            }).catch(err => {

                console.log(err.response.data)
                alert('Erro ao deletar produto!');
            });
        }
    }

    function AddToCart() {

        const Exists = cart.find(item => item._id === product.ProductID);

        if (Exists) {

            const remove = window.confirm("Tem certeza que deseja remover o produto ao carrinho ?");
            if (remove) {

                axios.delete(`${API}/cart${productID}`).then(res => { setCart(cart.filter(item => item !== product)) }).catch(err => {
                    alert('Erro ao remover produto do carrinho!')
                });
            }

        } else {

            const add = window.confirm("Tem certeza que deseja adicionar o produto ao carrinho ?");
            if (add) {

                const info = { ProductID: productID, userBuyer: localStorage.getItem('owner') };
                axios.post(`${API}/cart`, info).then(res => {
                    setCart([...cart, product])

                }).catch(err => {
                    alert(err.response.data);
                });
            }
        }
    }

    function RandomNames() {

        const names = ['Lucas', 'Felipe', 'Caio', 'Francisco', 'Laura', 'Luciana', 'Jackson', 'Miguel', 'Roberto', 'Diego']
        const random = Math.floor(Math.random() * names.length);
        return names[random];
    }

    return (

        <ProductContainer productImage={product.productImage} background={background}>

            <div className="header">
                <h1>{product.productName}</h1>
                <div className='back' onClick={() => navigate('/home')}>
                    <ion-icon name="return-up-back-outline"></ion-icon>
                </div>
            </div>
            <div className="img-container"><div className="img"></div></div>
            <div className='options'>

                {
                    product.productOwner === localStorage.getItem('owner') ?
                        <div className='edit-delete'>
                            <div className='edit' onClick={() => alert('Clicou no editar')}>
                                <h1>Editar</h1>
                                <ion-icon name="create-outline"></ion-icon>
                            </div>
                            <div className='delete' onClick={() => DeleteProduct()}>
                                <h1>Excluir</h1>
                                <ion-icon name="trash-outline"></ion-icon>
                            </div>
                        </div>
                        :
                        <div className='buy' onClick={() => AddToCart()}>
                            {cart.find(item => item._id === product._id) ? <h1 className='red'>Remover do carrinho</h1> : <h1 className='green'>Adicionar ao carrinho</h1>}
                            <ion-icon name="cart-outline"></ion-icon>
                        </div>
                }

            </div>
            <div className='content'>
                <h1>Produto</h1>
                <div className='product-name'>
                    <h1>{product.productName}</h1>
                </div>
                <h1>Preco</h1>
                <div className='product-price'>
                    <h1>R$ {product.productPrice}</h1>
                </div>
                <h1>Descricao</h1>
                <div className='product-description'>
                    <h1>{product.productDescription}</h1>
                </div>
                <h1>Postado Por</h1>
                <div className='product-owner'>
                    <h1>{product.productOwnerName ? product.productOwnerName : RandomNames()}</h1>
                </div>
                <h1>Categoria</h1>
                <div className='product-category'>
                    <h1>{product.productCategory}</h1>
                </div>
            </div>
        </ProductContainer>
    )
}