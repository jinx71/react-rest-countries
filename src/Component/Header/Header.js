import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className='container-fluid banner'>
            <div>
                <h1 style={{ fontSize: 56 + 'px' }}>Have a world tour with rest API.</h1>
            </div>
        </header>
    );
};

export default Header;