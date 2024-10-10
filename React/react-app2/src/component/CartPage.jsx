import { useAppContext } from './ReactContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart } = useAppContext();

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length > 0 ? (
        <>
          {cart.map((item, index) => (
            <div key={index}>
              <h3>{item.name}</h3>
              <p>Price: {item.price}</p>
              <p>Size: {item.size}</p>
            </div>
          ))}
          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default CartPage;
