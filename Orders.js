import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Orders = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>Your Orders</h1>
      {cart.length === 0 ? (
        <p>No items in your order.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} style={{ width: "50px", marginRight: "10px" }} />
              {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;
