import "./productCard.css";

const ProductCard = (props) => {
  const { product, cartItems, addToCart, removeFromCart } = props;


  const addingItemToCart = (item) => {
    addToCart({ ...item, quantity: 1 });
  };

  const removingItemFromCart = (item) => {
    removeFromCart(item);
  };

  return (
    // <div>Product Card</div>
    <div className="product-container">
      {product.imgUrl && (
        <div>
          <img
            className="product-image"
            src={product.imgUrl}
            alt={product.name}
          />
        </div>
      )}
      <h3>
        {product.name}{" "}
      </h3>

      <h2>Price: {product.price} </h2>
      <div className="description">Description: {product.description}</div>

      <div className="button-container">
        {cartItems.some(item => item.id === product.id) ? 
        <div className="remove-from-cart" onClick={()=>removingItemFromCart(product)}>Remove from cart</div>
         : 
         <div className="add-to-cart" onClick={()=>addingItemToCart(product)}>Add to cart</div>}

      </div>
    </div>
  );
};

export default ProductCard;