import React from "react";
import Logo from "../assets/images/logo.png";
import "../assets/styles/components/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Social1 from "../assets/images/Social1.png";
import Social2 from "../assets/images/Social2.png";
import Social3 from "../assets/images/Social3.png";
import Social4 from "../assets/images/Social4.png";

const Footer = () => (
  <footer>
    <div className="info">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="col4">
        <div className="content">
          <h2>Contact Us</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={["fas", "mobile-alt"]} /> +(1) 824-5428
            </li>
            <li>
              <FontAwesomeIcon icon={["fas", "mobile-alt"]} /> Miami, United
              States
            </li>
            <li>
              <FontAwesomeIcon icon={["far", "envelope"]} />{" "}
              yfuentes@shokworks.io
            </li>
          </ul>
        </div>
        <div className="content">
          <h2>Our Company</h2>
          <ul>
            <li>About</li>
            <li>Product</li>
            <li>Portfolio</li>
            <li>Career</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="content">
          <h2>Social Contacts</h2>
          <ul>
            <li>Facebook</li>
            <li>Linked In</li>
            <li>Youtube</li>
            <li>Vimeo</li>
            <li>Skype</li>
          </ul>
        </div>
        <div className="content">
          <div className="content2">
            <h2>Address</h2>
            <p>
              Internet Systems Consortium, Inc. 950 Charter Street Redwood City,
              CA USA.
            </p>
          </div>
          <div className="content2">
            <h2>Follow Us</h2>
            <div className="social">
              <a href="/">
                <img src={Social1} alt="Solcial1" />
              </a>
              <a href="/">
                <img src={Social2} alt="Solcial2" />
              </a>
              <a href="/">
                <img src={Social3} alt="Solcial3" />
              </a>
              <a href="/">
                <img src={Social4} alt="Solcial4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="image"></div>
  </footer>
);

export default Footer;
