import React from 'react';
import './navbar.styles.css';

const Navbar = () => {

    return (
        <navbar className='navbar'> 
            <div className = 'circle'></div>
            <ul class="menu__list">
                <li class="menu__list-item logo"><a class="menu__link logo" href="/home">FB Fitness</a></li>
                <li class="menu__list-item"><a class="menu__link active" href="/home">Home</a></li>
                <li class="menu__list-item"><a class="menu__link" href="/about">About</a></li>
                <li class="menu__list-item"><a class="menu__link" href="/program">Program</a></li>
                <li class="menu__list-item"><a class="menu__link contact" href="/contact">Contact Me</a></li>
            </ul>
        </navbar>
    );
};

export default Navbar;
