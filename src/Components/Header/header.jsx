import cartIcon from '../../assets/icon/cart-icon.png'
import './header.css'
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = (props) => {
    return (
        <div className="header-container">
            <div className="left">
                <div className='row1'>Online Shopping</div>
                <div className='row2'>Home</div>
                <div className='row'>About</div>
                <div className='row3'>
                    <Dropdown>
                        <Dropdown.Toggle variant="success">
                            Shop
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#">
                                All Products
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                Popular Items
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                New Arrival
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <div className="right">
                <div className="cart-icon" id='cart-display'>
                    <img
                        src={cartIcon}
                        alt="Cart"
                        width={30}
                        height={30}
                    />
                    <span className='cart-count'>{props.cartCount}</span>
                </div>
            </div>
        </div>
    );
}

export default Header;