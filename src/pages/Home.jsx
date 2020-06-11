import React from "react";
//Importando componetes
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import Form from "../components/Form.jsx";
import Footer from "../components/Footer.jsx";
//Importando Archivos
import "../assets/styles/pages/Home.scss";
import Community from "../assets/images/community.png";
import Article from "../assets/images/article.png";
import City from "../assets/images/city.png";
import Logo1 from "../assets/images/Logo1.png";
import Logo2 from "../assets/images/Logo2.png";
import Logo3 from "../assets/images/Logo3.png";
import Logo4 from "../assets/images/Logo4.png";
import Logo5 from "../assets/images/Logo5.png";
import Logo6 from "../assets/images/Logo6.png";

const Home = () => (
  <div className="home">
    <Header />
    {/* sectionImage */}
    <div className="sectionImage">
      <div className="center">
        <img src={Community} alt="Community" />
        <div className="titles">
          <h1>A Brand New Way</h1>
          <h1>To See The World</h1>
        </div>
        <div className="buttons">
          <Button title="Our Works" active="active" />
          <Button title="Know More" />
        </div>
      </div>
    </div>
    {/* sectionImage */}
    <div className="sectionImage">
      <div className="columns">
        <div className="content">
          <div className="info right">
            <h1>The Process About Our Work</h1>
            <p>
              Alejandro Laplana leads and adaptable end-to-end development team
              consisting of a large portion of captable enterprise mixed reality
              solutions.
            </p>
            <Button title="Know More" />
          </div>
        </div>
        <div className="content">
          <img src={City} alt="Article" />
        </div>
      </div>
    </div>
    {/* sectionImage */}
    <div className="sectionImage">
      <div className="columns">
        <div className="content">
          <img src={Article} alt="Article" />
        </div>
        <div className="content">
          <div className="info left">
            <h1>
              We are here to <strong>always help</strong> you
            </h1>
            <p>
              Shokworks team provide solutions and guidance to every project,
              taking the project vision to high level.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* sectionImage */}
    {/* Cards */}
    <div className="content_cards">
      <h1>Our Partnes & Clients</h1>
      <div className="cards">
        <Card logo={Logo1} />
        <Card logo={Logo2} />
        <Card logo={Logo3} />
        <Card logo={Logo4} />
        <Card logo={Logo5} />
        <Card logo={Logo6} />
      </div>
    </div>
    {/* Cards */}
    {/* Form */}
    <Form />
    {/* Form */}
    <Footer />
  </div>
);

export default Home;
