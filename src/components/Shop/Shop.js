import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Heros from '../Heros/Heros';
import './Shop.css'

const Shop = () => {
    const [heros, setHeros] = useState([]);

    useEffect(() => {
        fetch('./marvelHeros.json')
            .then(res => res.json())
            .then(data => setHeros(data))
    }, [])
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        {
                            heros.map(hero => <Heros hero={hero} key={hero.key}></Heros>)
                        }
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </>
    );
};

export default Shop;