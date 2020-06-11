import React from "react";
//Componentes
import Search from "./Search.jsx";
import Button from "./Button.jsx";
//Estaticos
import "../assets/styles/components/Header.scss";
import Logo from "../assets/images/logo.png";

const Header = () => (
  <header>
    <div className="logo">
      <img src={Logo} alt="Logo" />
    </div>
    <div className="nav">
      <nav>
        <ul>
          <li className="active">Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Product</li>
          <li>Career</li>
          <li>Blog</li>
        </ul>
      </nav>
    </div>
    <div className="search">
      <Search />
    </div>
    <div className="contact">
      <Button title="Contact Us" active="active" />
    </div>
  </header>
);

export default Header;
