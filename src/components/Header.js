import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='search'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6k_7EEN6MQD6TIstZPhQhVvU7yn-VdoiQkfNunmtfjg&s" alt="Logo" />
            </div>
            <div className='nav'>
                <Link to="/home">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/support">Support</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className='search'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9wh6GhDPXp2pBVjQ-MlRIAOIq_mtnML3Yjwpa7FqjNA&s" alt="Search" />
            </div>
        </div>
    )
}

export default Header;