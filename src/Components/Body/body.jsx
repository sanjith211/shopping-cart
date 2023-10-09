import ProductCard from '../ProductCard/productCard';
import './body.css'

const Body = (props) => {

  return (
    <div className="body-container">
      <div className="products-container">
        {props.products.map((product, index) => (
          <ProductCard product={product} cartItems={props.cartItems} addToCart={props.addToCart} removeFromCart={props.removeFromCart} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Body;
