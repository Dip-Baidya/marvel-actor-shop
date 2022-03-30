import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Heros = (props) => {
    const { name, role, age, country, salary, image } = props.hero;

    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-1">
                <div className="col">
                    <div className="card h-100">
                        <img src={image} className="card-img-top " alt="..." />
                        <div className="card-body text-center">
                            <h3 className="card-title">Name: {name}</h3>
                            <p className="card-text">Role: {role}</p>
                            <p className="card-text">Age: {age}</p>
                            <p className="card-text">Country: {country}</p>
                            <p className="card-text">Salary: ${salary}</p>
                            <button onClick={() => props.handleAddToCart(props.hero)} className="btn btn-danger">{cartIcon} Add Me</button>
                        </div>
                    </div>
                </div>

                {/* <div className="col">
                    <div className="card h-100">
                        <img src={image} className="card-img-top " alt="..." />
                        <div className="card-body text-center">
                            <h3 className="card-title">Name: {name}</h3>
                            <p className="card-text">Role: {role}</p>
                            <p className="card-text">Age: {age}</p>
                            <p className="card-text">Country: {country}</p>
                            <p className="card-text">Salary: ${salary}</p>
                            <button onClick={() => props.handleAddToCart(props.hero)} className="btn btn-danger">{cartIcon} Add Me</button>
                        </div>
                    </div>
                </div> */}
                {/* <div className="col">
                    <div className="card h-100">
                        <img src={image} className="card-img-top " alt="..." />
                        <div className="card-body text-center">
                            <h3 className="card-title">Name: {name}</h3>
                            <p className="card-text">Role: {role}</p>
                            <p className="card-text">Age: {age}</p>
                            <p className="card-text">Country: {country}</p>
                            <p className="card-text">Salary: ${salary}</p>
                            <button onClick={() => props.handleAddToCart(props.hero)} className="btn btn-danger">{cartIcon} Add Me</button>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default Heros;