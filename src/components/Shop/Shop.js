import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Heros from '../Heros/Heros';
import './Shop.css'

const Shop = () => {
    const [heros, setHeros] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./marvelHeros.json')
            .then(res => res.json())
            .then(data => setHeros(data))
    }, [])

    const handleAddToCart = (hero) => {
        const newCart = [...cart, hero];
        setCart(newCart);
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        {
                            heros.map(hero => <Heros
                                hero={hero}
                                key={hero.key}
                                handleAddToCart={handleAddToCart}></Heros>)
                        }
                    </div>
                    <div className="col-md-3">
                        <Cart cart={cart} key={cart.key}></Cart>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;