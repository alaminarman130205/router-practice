import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <Link to="/home">home</Link>
        <Link to="/about">about</Link>
        <Link to="/products">products</Link>
        <Link to="/friends">Friends</Link>
      </nav>
      <p>common header</p>
    </div>
  );
};

export default Header;
