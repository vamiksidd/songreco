import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="nav">
      <h1 className="heading">📀Groove</h1>
      <div className="navlinks">
        <Link to="/" >Home</Link>
        <Link to="/about" id='about' >About</Link>
        <Link to="/signup" className='btn'>Signup</Link>
        {/* <a id="about" href="./about.html">About</a>
        <a className="btn" href="./signin.html">Sign Up</a> */}
      </div>
    </div>
  );
};

export default Navbar;