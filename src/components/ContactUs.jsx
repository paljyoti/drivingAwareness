import React from "react";
import '../assets/css/Contact.css';
import Header from './Header'
import Footer from './Footer'
import { Link } from "react-router-dom";

function ContactUs() {


  return (
    <div>
      <div className="contact-us">
        <Header/>
        <h1>Contact Us</h1>
        <p>
          At Driving Awareness, our aim is to deliver excellence in every
          interaction! Our operations are rooted in an industry founded on
          trust, a trust that is nurtured through effective communication and
          seasoned assistance. With Choice, you'll always have a real person to
          speak with! Curious to explore further about what we offer?
        </p>
        <div>
        <Link className="calling" to="tel:7018324802">calling</Link>

        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ContactUs;
