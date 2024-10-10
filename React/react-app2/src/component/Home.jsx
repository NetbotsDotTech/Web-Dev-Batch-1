import { Link } from 'react-router-dom';
import Cart from './Cart';
import Button from './Button';

const Home = () => {
  return (
    <div>
      <section className="hero-section">
        <h1>Welcome to Our Shop</h1>
        <p>
          Discover our latest collection for Men, Women, and Kids. Explore high-quality products.
        </p>
        <div>
          <Link to="/service?category=men">Men</Link>
          <Link to="/service?category=women">Women</Link>
          <Link to="/service?category=kids">Kids</Link>
        </div>
      </section>

      <section className="featured-products">
        <Cart name="Product 1" price="100 PKR" image="product1.jpg" />
        <Cart name="Product 2" price="200 PKR" image="product2.jpg" />
        <Cart name="Product 3" price="300 PKR" image="product3.jpg" />
      </section>

      <section className="banner">
        <h2>We Make Better Things In A Better Way</h2>
        <p>Discover our eco-friendly collection.</p>
      </section>
      
      {/* Slider Component */}
      {/* Additional Section */}
    </div>
  );
};

export default Home;
