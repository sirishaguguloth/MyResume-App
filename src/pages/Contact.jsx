import React, { useState } from 'react';
import '../styles/Nav.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    localStorage.setItem('contactData', JSON.stringify(formData));
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    alert('Form submitted successfully!');
  };

  return (
    <div className='contact' id='contact'>
      <center>
        <h2>Contact</h2>
        <p>
          I am thrilled that you are interested in getting in touch. Whether
          you have a project in mind, a question to ask, or simply want to say
          hello, I would love to hear from you. Feel free to reach out through
          any of the following methods.
        </p>
        <div className='details'>
          <div className='cont'>
            <div className='add'>
            🏠 Address
              <p>Hyderabad, Telangana, India</p>
            </div>
            <div className='add1'>
            📱  Mobile
              <p>+917330656759</p>
            </div>
            <div className='add2'>
            📧   E-mail
              <p>sirishagugulothu777@gmail.com</p>
            </div>
          </div>
          <div className='form'>
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter your Name'
                required/>
              <br />
              <br />
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter your Email'
                required/>
              <br />
              <br />
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Enter your Message'
                required></textarea>
              <br />
              <br />
              <input type='submit' value='Submit' />
            </form>
          </div>
        </div>
      </center>
      <div className='footer'>
        <p>© Copyright 2024 Sirisha Gugulothu - All Rights Received</p>
      </div>
    </div>
  );
};

export default Contact;
