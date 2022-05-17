import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

import HomeContainer from "./style"
import background from '../../assets/background.jpg';
import small_logo from '../../assets/small.svg';

export default function Home() {

    const API = `http://localhost:5000`;
    const navigate = useNavigate();

    const [data, setData] = useState({

        showCategories: false,
        showFilters: false,

        searchByName: false,
        nameSearched: null,

        productCategory: 'Todos',
        productFilter: null,

    });

    const [products, setProducts] = useState([]);

    useEffect(() => {

        axios.get(`${API}/allproducts`).then(res => { setProducts(res.data); }).catch(err => { console.log(err); });

    }, []);

    function SetShowCategory(e) {

        setData({ ...data, productCategory: e.target.value, showCategories: !data.showCategories });
        alert(`Categoria selecionada: ${e.target.value}`);
    }

    function ShowCategoriesList() {

        return (
            <select onChange={e => SetShowCategory(e)} >
                <option value="Escolher">Escolher</option>
                <option value="Todos">Todos</option>
                <option value="Roupas">Roupas</option>
                <option value="Eletronicos">Eletronicos</option>
                <option value="Automoveis">Automoveis</option>
                <option value="Eletrodomesticos">Eletrodomesticos</option>
                <option value="Moveis">Móveis</option>
                <option value="Outros">Outros</option>
            </select>
        )
    }

    function SetShowFilter(e) {

        setData({ ...data, productFilter: e.target.value, showFilters: !data.showFilters });
        alert(`Filtro: ${e.target.value}`);
    }

    function ShowFiltersList() {

        return (
            <select onChange={e => SetShowFilter(e)} >
                <option value="Escolher">Escolher</option>
                <option value="Baratos">Mais baratos</option>
                <option value="Caros">Mais caros</option>
            </select>
        )
    }

    function RenderProducts({ id, name, price, date, time, img }) {

        return (
            <div className='product' onClick={() => navigate(`/product${id}`)}>
                <div className='product-image'><img src={img}></img></div>
                <div className='product-info'>
                    <div className='product-name'><h1>{name}</h1></div>
                    <div className='product-price'><h1>R$: {price}</h1></div>
                    <div className='product-date'><h1>{date} {time}</h1></div>
                </div>
            </div>
        )
    }

    function MapProducts() {

        if (data.productFilter) {

            if (data.productFilter === 'Baratos') products.sort((a, b) => { return a.productPrice - b.productPrice; })
            if (data.productFilter === 'Caros') products.sort((a, b) => { return b.productPrice - a.productPrice; })
        }

        return products.map((prd, i) => {
            if (prd.productCategory === data.productCategory || data.productCategory === 'Todos') {
                return (
                    <RenderProducts
                        key={i} id={prd._id} name={prd.productName} price={prd.productPrice}
                        date={prd.productDate} time={prd.productTime} img={prd.productImage}
                    />
                )
            }
        })
    }

    function SearchByNameFunction(e) {

        e.target.value !== '' ? setData({ ...data, searchByName: true, nameSearched: e.target.value }) :
            setData({ ...data, searchByName: false, nameSearched: null });
    }

    function MapProductsByName() {

        return products.map((prd, i) => {
            if (prd.productName.toLowerCase().includes(data.nameSearched.toLowerCase())) {
                return (
                    <RenderProducts
                        key={i} id={prd._id} name={prd.productName} price={prd.productPrice}
                        date={prd.productDate} time={prd.productTime} img={prd.productImage}
                    />
                )
            }
        })
    }

    function Exit() {
        localStorage.removeItem('owner');
        localStorage.removeItem('device');
        localStorage.removeItem('name');
        return navigate('/');
    }

    return (

        <HomeContainer background_img={background}>

            <div className='search-product'>
                <img src={small_logo}></img>
                <input type='text' placeholder='buscar produtos' onChange={e => SearchByNameFunction(e)} ></input>
                <div className='exit' onClick={() => Exit()}>
                    <ion-icon name="exit-outline"></ion-icon>
                </div>
            </div>

            <div className='categories-filters'>
                <div className='categories'>
                    {data.showCategories ? <ShowCategoriesList /> : <h1 onClick={() => setData({ ...data, showCategories: !data.showCategories })} >Categorias</h1>}
                </div>
                <div className='filters'>
                    {data.showFilters ? <ShowFiltersList /> : <h1 onClick={() => setData({ ...data, showFilters: !data.showFilters })} >Filtros</h1>}
                </div>
            </div>

            <div className='products'>
                {data.searchByName ? <MapProductsByName /> : <MapProducts />}
                {/* <MapProducts /> */}
            </div>

            <div className='footer'>
                <div className='publish-product' onClick={() => navigate('/publish')}>
                    <h1>Publicar</h1>
                    <ion-icon name="add-circle-outline"></ion-icon>
                </div>
                <div className='my-cart' onClick={() => navigate('/cart')}>
                    <h1>Carrinho</h1>
                    <ion-icon name="cart-outline"></ion-icon>
                </div>
            </div>
        </HomeContainer>
    )
}