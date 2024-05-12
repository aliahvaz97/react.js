// import React, { useState } from 'react';

// function LoginForm() {
  // const [name, setName] = useState('');
  // const [phone, setPhone] = useState('');

  // const handleSubmit = (event) => {
    // event.preventDefault();

    // Handle form submission here
    // console.log(`Submitting form with name: ${name} and phone: ${phone}`);
  // };

  // return (
    // <div className="container">
      // <div className="logo">
      // <img src={require('./OIG3.eijPHUcJjSFT7XNdZLIY.png')} width="50%" height="128"  padding="250px" alt="cam"/>
      // </div>
      // <form onSubmit={handleSubmit}>
        // <label htmlFor="name">نام</label>
        // <input
          // type="text"
          // id="name"
          // value={name}
          // onChange={(event) => setName(event.target.value)}
          // required
        // />

        // <label htmlFor="phone">تلفن همراه</label>
        // <input
          // type="tel"
          // id="phone"
          // value={phone}
          // onChange={(event) => setPhone(event.target.value)}
          // required
        // />

        // <button type="./src/home/home.jsx">ورود</button>
      // </form>
      // <footer>
        // &copy;diaco dev
      // </footer>
    // </div>
  // );
// }

// export default LoginForm;
import React from 'react';
import './styles.css'; // Import CSS file

function Home() {
    return (
        <div>
            {/* Header Section */}
            <header>
              
  
                <div className="container">
                    <h1></h1>
                    <nav>
                        <ul>
                            <li><a href="#">ارتباط</a></li>
                            <li><a href="#">خدمات</a></li>
                            <li><a href="#">فروشگاه</a></li>
                            <li><a href="#">خانه</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <h2>Welcome to Homecare</h2>
                    <p>Your trusted partner for personalized homecare services.</p>
                </div>
            </section>

            {/* Services Section */}
            <section className="services">
                <div className="container">
                    <h2>Our Services</h2>
                    <div className="service-card">
                        <h3>In-Home Nursing Care</h3>
                        <p>Professional nursing care in the comfort of your home.</p>
                    </div>
                    <div className="service-card">
                        <h3>Caregiver Support</h3>
                        <p>Support and assistance for family caregivers.</p>
                    </div>
                    {/* Add more service cards as needed */}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
                <div className="container">
                    <h2>Client Testimonials</h2>
                    <div className="testimonial">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                        <span>- John Doe</span>
                    </div>
                    {/* Add more testimonials as needed */}
                </div>
            </section>

            {/* Footer Section */}
            <footer>
                <div className="container">
                    <p>&copy; 2024 Homecare Application. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Home;
