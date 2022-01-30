import React from 'react';
import { Nav } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import { Link } from 'react-router-dom';
import img from '../../images/supria (2).png';
import './Banner.css';

const Banner = () => {
    return (
        <>
              <section class="top_banner flexible_container">
        <div class="half_width">
        <Fade top>
        <h1>Welcome To</h1>
        <h2><span class="title_color">Supriya Debnath</span> World</h2>
        <h3 style={{color: 'pink'}}>I am Supriya Debnath and I am burdened <br /> with glorious purpose.</h3>
        <p className="peragraph">I already learned the basic HTML and CSS. I can build any simple website. I can even teach my grandma how to make simple website. My goal is to build 3 websites and learn advanced topics.
         </p>
         <div className="footer-icon">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-instagram"></i>
        </div>
        
        </Fade>
        <Fade right>
            <a class="link_button" target="_blank" href="https://www.linkedin.com/in/supriya-debnath-3a669b21a/">Learn More</a>
        </Fade>
            
        </div>
       
        <div class="half_width">
        <Pulse>
        <img src={img} alt="" />
        </Pulse>
        </div>
        
    </section>

        </>

    );
};

export default Banner;






