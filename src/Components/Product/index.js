import React from 'react';
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import ProductContainer from './style';
import background from '../../assets/background.jpg';

export default function Product() {

    const params = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState({});

    const productID = params.ProductID;
    // const API = 'http://localhost:5000';
    const API = 'https://smartstore10.herokuapp.com';

    useEffect(() => {

        axios.get(`${API}/product${productID}`,).then(res => {

            setProduct(res.data);

        }).catch(err => {

            console.log(err.response.data)
            navigate('/home');
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

    // <h1>Product {productID}</h1>
    // {console.log(product)}

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

                {product.productOwner === localStorage.getItem('owner') ?
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
                    <div className='buy'>
                        <h1>Adicionar ao carrinho</h1>
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
                <h1>Categoria</h1>
                <div className='product-category'>
                    <h1>{product.productCategory}</h1>
                </div>
            </div>
        </ProductContainer>
    )
}