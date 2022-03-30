import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    for (const hero of cart) {
        total = total + hero.salary;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;

    return (
        <div className="container mt-4 cart">
            <h4 className="text-center fs-3 fw-bold"><span className="text-danger ">MARVEL</span> SHOP</h4>
            <h5>Heros Added: {cart.length}</h5>

            <p>Total: ${total.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Shipping Charge: ${shipping.toFixed(2)}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>

            {
                cart.map(cartData =>
                    <div className="cart d-flex mb-3">

                        <div >
                            <img className="image-style me-4" src={cartData.image} alt="" />
                        </div>

                        <div className="">
                            <h5>{cartData.name}</h5>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Cart;