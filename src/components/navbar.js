import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from './media/user-icon.png';
import './navbar.css';

export default function Navbar() {
    const navStyle = {
        listStyleType: 'none',
        textDecoration: 'none',
      };
    
      return (
        <div id='nav-container'>
            <h2 id='site-header'>Bookstore CMS</h2>

            <ul id='links' style={navStyle}>
                <Link to="/">
                <li className='nav-item'>BOOKS</li>
                </Link>
                <Link to="Categories" style={navStyle}>
                <li className='nav-item'>CATEGORIES</li>
                </Link>
            </ul>

            <img id='user-logo' src={userIcon} alt='user icon' />
        </div>
    );
}