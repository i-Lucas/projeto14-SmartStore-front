import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Uploader } from 'uploader';
import axios from 'axios';

import PublishContainer from './style';
import background from '../../assets/background.jpg';
import noimage from '../../assets/cam.png';

export default function Publish() {

    const navigate = useNavigate();
    const API = `http://localhost:5000`;
    const uploader = new Uploader({ apiKey: "free" });
    const header = { headers: { "Authorization": `Bearer ${localStorage.getItem('device')}` } }

    const [data, setData] = useState({

        productName: null,
        productPrice: null,
        productDescription: null,
        productImage: null,
        productCategory: null,
        productQuantity: null,
        productStatus: null
    });

    function uploadFiles() {

        let img = undefined;
        uploader.open({ multi: false }).then(files => {
            // files.length > 0 ? setData({ ...data, productImage: files.map(x => x.fileUrl) }) : console.log("No files uploaded");
            files.length > 0 ? img = files.map(x => x.fileUrl) : console.log("No files uploaded");
            setData({ ...data, productImage: img[0] });
        })
    }

    function HandleSubmit(e) {

        e.preventDefault();

        if (data.productImage === null) return alert("Por favor, selecione uma imagem");
        if (data.productCategory === null || data.productCategory === 'null') return alert("Por favor, selecione uma categoria");

        const newproduct = {

            productName: data.productName,
            productPrice: data.productPrice,
            productDescription: data.productDescription,
            productImage: data.productImage,
            productCategory: data.productCategory,
            productQuantity: 1,
            productStatus: 'available',
            productDate: new Date().toLocaleDateString(),
            productTime: new Date().toLocaleTimeString(),
            productOwner: localStorage.getItem('owner')
        }

        axios.post(`${API}/newproduct`, newproduct).then(res => {

            navigate('/home');
            return alert("Produto cadastrado com sucesso!");

        }).catch(err => alert(err.response.data));
    }

    return (

        <PublishContainer productImage={data.productImage ? data.productImage : noimage} background_img={background}>

            <div className="header">
                <h1>Anunciar Produto</h1>
                <div className='back' onClick={() => navigate('/home')}>
                    <ion-icon name="return-up-back-outline"></ion-icon>
                </div>
            </div>

            <div className="img-container"><div className="img"></div></div>
            <div className="add-image"><button onClick={uploadFiles}>Adicionar Foto</button></div>

            <div className="form-container">
                <form onSubmit={HandleSubmit}>

                    <input type='text' placeholder='Nome do produto' required
                        onChange={e => setData({ ...data, productName: e.target.value })} />
                    <input type='text' placeholder='Preco' required
                        onChange={e => setData({ ...data, productPrice: e.target.value })} />
                    <input type='text' placeholder='Descricao' required
                        onChange={e => setData({ ...data, productDescription: e.target.value })} />

                    <div className="category">
                        <h1>Selecione a Categoria</h1>

                        <select onChange={e => setData({ ...data, productCategory: e.target.value })} >
                            <option value="null">Selecione uma categoria</option>
                            <option value="Roupas">Roupas</option>
                            <option value="Eletronicos">Eletronicos</option>
                            <option value="Automoveis">Automoveis</option>
                            <option value="Eletrodomesticos">Eletrodomesticos</option>
                            <option value="Moveis">Móveis</option>
                            <option value="Outros">Outros</option>
                        </select>
                    </div>

                    <button type='submit'>Postar</button>
                </form>
            </div>

        </PublishContainer>
    )
}