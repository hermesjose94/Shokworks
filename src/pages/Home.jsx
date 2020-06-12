import React, { useState, useEffect } from "react";

//Importando componetes
import Fetch from "../API/Axios";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import Form from "../components/Form.jsx";
import Carousel from "../components/Carousel.jsx";
import ClientCarousel from "../components/ClientCarousel.jsx";
import Footer from "../components/Footer.jsx";
import Loading from "./Loading.jsx";
import PageError from "./Error.jsx";
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

const Home = () => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    items: [],
    clients: [],
    photos: [],
    messageForm: false,
    form: {
      name: "",
      lastname: "",
      email: "",
      option: "",
      message: "",
    },
  });

  //Metodo para traer la data de api newsapi
  //Metodo para traer la data de api jsonplaceholder
  //Hago otra consulta a la api jsonplacerholde para obtener las fotos de otro enpoint
  //y poder poner fotos a los clientes
  const fetchData = async () => {
    // type, endpoint, body
    const [response, error] = await Fetch(
      "GET",
      "http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-11&sortBy=publishedAt&apiKey=ce9961344b264e81be9286e503fb504b",
      null
    );
    // type, endpoint, body
    const [response2, error2] = await Fetch(
      "GET",
      "https://jsonplaceholder.typicode.com/posts",
      null
    );
    // type, endpoint, body
    const [response3, error3] = await Fetch(
      "GET",
      "https://jsonplaceholder.typicode.com/photos",
      null
    );
    //Validacion de que llegara la data de ambos endpoint
    if (!error || !error2 || !error3) {
      if (response && response2 && response3) {
        setState({
          ...state,
          loading: false,
          items: response.articles,
          clients: response2,
          photos: response3,
        });
      } else {
        setState({
          ...state,
          loading: false,
          error: error,
        });
      }
    } else {
      setState({
        ...state,
        loading: false,
        error: error,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setState({
      ...state,
      form: {
        ...state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = `${state.form.name} ${state.form.lastname}`;
    const body = state.form.message;
    let json = {
      title: title,
      body: body,
      userId: 1,
    };

    // type, endoint, body
    const [response, error] = await Fetch(
      "POST",
      `https://jsonplaceholder.typicode.com/posts`,
      json
    );
    //Agrego la respuesta al array de clientes para verlo en su carousel
    if (!error) {
      const newclients = state.clients;
      newclients.unshift(response);

      setState({
        ...state,
        loading: false,
        messageForm: true,
        clients: newclients,
      });
    } else {
      setState({
        ...state,
        loading: false,
        error: error,
      });
    }
  };

  if (state.error) {
    return <PageError title="500" error={state.error.message} />;
  }

  if (state.loading) {
    return <Loading />;
  }

  return (
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
                Alejandro Laplana leads and adaptable end-to-end development
                team consisting of a large portion of captable enterprise mixed
                reality solutions.
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
      {/* Carousel */}
      <div className="title_home">
        <h1>
          What is the <br /> <strong>Speciality Of Us?</strong>
        </h1>
      </div>
      {state.items.length > 0 && <Carousel items={state.items} active={0} />}
      {/* Carousel */}
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
      {/* Clients */}
      <div className="title_home">
        <h1>
          What Our <strong>Client Says?</strong>
        </h1>
      </div>
      {/* <Client /> */}
      {state.clients.length > 0 && (
        <ClientCarousel
          items={state.clients}
          photos={state.photos}
          active={0}
        />
      )}
      {/* Clients */}
      {/* Form */}
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        message={state.messageForm}
      />
      {/* Form */}
      <Footer />
    </div>
  );
};

export default Home;
