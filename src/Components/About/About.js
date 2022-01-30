import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../../images/sup.png';
import './About.css';

const About = () => {
    return (
        <>
        <Container>
        <div xs={1} sm={1} md={2} lg={2} class="about">
        <div class="half">
        <Fade top>
        <img src={image} alt="" />
        </Fade>
        </div>
        <div class="half">
        <Fade right>
        <h1>About Me</h1>
            <h3>Become a Web Developer</h3>
            <p> Thanks for having me
           I'm Supriya from Bangladesh. I'm interested in problem solving and learning new stuff. I would like to learn more on web development and technology . I am a computer science student wanting to increase my knowledge on computer science as well. I know this community would help me alot to learn so many things.</p>
            <button className="p-1 booking-button btn1 w-50" target="_blank" as={Link} to="/about" >Read More</button>

        </Fade>

        </div>

    </div>
        </Container>
        </>
    );
};

export default About;