import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client';

import '../public/stylesheets/reset.css';
import '../public/stylesheets/global.css';
import '../public/stylesheets/fonts.css';

import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import Publish from './Components/Publish';
import Product from './Components/Product';
import Cart from './Components/Cart';

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/home" element={<Home />} />
				<Route path="/publish" element={<Publish />} />
				<Route path="/product:ProductID" element={<Product />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</BrowserRouter>
	);
}

const container = document.querySelector('.root');
const root = createRoot(container);
root.render(<App />);