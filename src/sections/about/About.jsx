import React from 'react';
import './about.css';
import AboutImage from '../../assests/Ayush1.jpg';
import  CV  from '../../assests/cv.pdf';
import { MdOutlineDownload } from "react-icons/md";
import Card from '../../components/Card';
import data from './data';

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
         <img className='about__portrait' src={AboutImage} alt="" />
        </div>
        <div className="about__right">
         <h2>About me</h2>
         <div className="about__cards">
          {
            data.map(item => (
              <Card key={item.id} className="about__card">
                <span className='about__card-icon'>{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))
          }
         </div>
          <p>Building projects my clients love always been my passion.
            Being in the web development industry for over 2 years and serving 
            more than 70 happy clients worldwide,I'm always motivated to do
            more! 
          </p>
          <p>
            Hi, my anme is Ayush Chaurasia from Kanpur. I'm a full-stack web 
            developer with a Bachelors degree in Science.My top
            priority is to get your business online the right way, giving you 
            industey standard design and all the functionality you need to
            operate smoothly online. Get in touch today with the details of
            your project let's get started! Check out my resume below!
          </p>
          <a href={CV} download className='btn primary'>Download CV <MdOutlineDownload /> </a>
         </div>
        </div>
    </section>
  )
}

export default About;
