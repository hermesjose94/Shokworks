import React from "react";
import Button from "./Button.jsx";
import "../assets/styles/components/Form.scss";

const Form = ({ handleSubmit, handleChange, message }) => (
  <form onSubmit={handleSubmit}>
    <div className="contentForm">
      <div className="title">
        <h1>Facing Problem?</h1>
        <h1>
          <strong>Lets Get In Touch Now</strong>
        </h1>
      </div>
      <div className="cardForm">
        <div className="col2">
          <div className="form_control">
            <label>First Name</label>
            <input
              name="name"
              type="text"
              onChange={handleChange}
              placeholder="Robert Lee"
            />
          </div>
          <div className="form_control">
            <label>Last Name</label>
            <input
              name="lastname"
              type="text"
              onChange={handleChange}
              placeholder="Anderson"
            />
          </div>
        </div>
        <div className="form_control">
          <label>Your Email Adress</label>
          <input
            name="email"
            type="email"
            onChange={handleChange}
            placeholder="kevin.jones@gmail.com"
          />
        </div>
        <div className="form_control">
          <label>Which Related Problem You Are Facing?</label>
          <select name="option" onChange={handleChange}>
            <option disabled defaultValue>
              Select One
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </div>
        <div className="form_control">
          <label>Type Your Message</label>
          <textarea
            name="message"
            rows="3"
            onChange={handleChange}
            placeholder="Here goes your message"
          ></textarea>
        </div>
        {message && (
          <div className="form_control">
            <label>Respuesta en el carousel de clientes</label>
          </div>
        )}
        <Button title="Our Works" submit={true} />
      </div>
    </div>
  </form>
);

export default Form;
