import React from 'react';
import './Header.css';
import LoginButton from './LoginButton';

function Header() {
  return (
    <div className="header">
      <a href="link">Home</a>
      <LoginButton />
    </div>
  );
}

export default Header;
