import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header';
import Title from './Components/Title/title';
import Body from './Components/Body/body';
import Footer from './Components/Footer/footer';
import { useState } from 'react';

const products_list = [
  {
    id: 1,
    name: "Apple IPhone 14",
    price: "Rs. 64,990",
    description: "5G Connectivity (SA / NSA): More spectrum bands supported by a handset would provide wider 5G connectivity across markets.",
    imgUrl:
      "https://static.toiimg.com/photo/80635334/Apple-iPhone-14-128GB-4GB-RAM.jpg",
  },
  {
    id: 2,
    name: "Harry Potter and the Chamber of Secrets  (English, Paperback, Rowling J.K.)",
    price: "Rs. 202",
    description: "The second adventure in the spellbinding Harry Potter saga - the series that changed the world of books foreverHarry Potter's summer has included the worst birthday ever",
    imgUrl:
      "https://www.bigw.com.au/medias/sys_master/images/images/h2c/h48/10212554702878.jpg",
  },
  {
    id: 3,
    name: "Men Printed Round Neck Cotton Blend Light Green T-Shirt",
    price: "Rs. 249",
    description: "Fit to wear",
    imgUrl:
      "https://resurrection-online.com/images/products/zoom/1377102863-28165600.jpg",
  },
  {
    id: 4,
    name: "Belt for Men",
    price: "Rs. 150",
    description: "Fit to wear",
    imgUrl:
      "https://i.etsystatic.com/9268997/r/il/1cd6e5/2096549203/il_794xN.2096549203_kobw.jpg",
  },
  {
    id: 5,
    name: "Formal Shoes",
    price: "Rs. 999",
    description: "Walk with neat and style",
    imgUrl:
      "https://image.made-in-china.com/2f0j00hNJEuZirHUpV/Smooth-Leather-Steel-Sole-Formal-Safety-Shoes.jpg",
  },
  {
    id: 6,
    name: "Money Purse",
    price: "Rs. 499",
    description: "A money purse is one of the most common accessories used by men and women. Your wallet reflects your style and attitude.",
    imgUrl:
      "https://cdn.shopclues.com/images/detailed/3595/DSC3158_1395486737.jpg",
  },
  {
    id: 7,
    name: "Water Bottle",
    price: "Rs. 150",
    description: "A water bottle is a container that is used to hold liquids, mainly water, for the purpose of transporting a drink while travelling or while otherwise away from a supply of potable water.",
    imgUrl:
      "https://cdna.4imprint.com/prod/700/486809.jpg",
  },
  {
    id: 8,
    name: "Wireless Headset",
    price: "Rs. 1999",
    description: "Headsets make work and life easier. They free up your hands so you can compute while you talk; voice filters make you sound sharper and clearer in calls and video meetings.",
    imgUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71fN6VoK7DL._AC_SL1500_.jpg",
  },
];

function App() {
  const [products, setProducts] = useState(products_list);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (newItem) => {
    setCartItems((cartItems) => [...cartItems, newItem]);
  };

  const removeFromCart = (itemToBeRemoved) => {
    setCartItems((cartItems) =>
      cartItems.filter((item) => item.id !== itemToBeRemoved.id)
    );
  };
  return (
    <div className="App">
      <Header cartCount={cartItems.length}/>
      <Title />
      <Body products={products} cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />
      <Footer />
    </div>
  );
}

export default App;
