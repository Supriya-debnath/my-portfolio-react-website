import React from 'react';
import { Card } from 'react-bootstrap';
import html from '../../images/html.png'
import css from '../../images/css.jpg'
import javascript from '../../images/js..jfif'
import react from '../../images/react.png'
import bootstrap from '../../images/bootstrap.png'
import tailwind from '../../images/Tailwind-.png'
import node from '../../images/node-js.png'
import mongodb from '../../images/mongodb.png'
import express from '../../images/express.png'
import firebase from '../../images/firebase.png'
import material from '../../images/metarial.jfif'
import github from '../../images/github.png'
import './Skills.css';
import { Fade } from 'react-reveal';

const icons = [
    {
        name: 'HTML5',
        img: html

    },
    {
        name: 'CSS3',
        img: css

    },
    
    {
        name: 'Javascript ',
        img: javascript

    },
    {
        name: 'React JS',
        img: react

    },
    {
        name: 'Bootstrap',
        img: bootstrap

    },
    
    {
        name: 'Tailwind',
        img: tailwind

    },
    {
        name: 'Node JS',
        img: node

    },
    {
        name: 'Mongodb ',
        img: mongodb

    },
    {
        name: 'Express ',
        img: express

    },
    {
        name: 'Firebase',
        img: firebase
    },
    {
        name: 'Material UI',
        img: material
    },
    {
        name: 'Github',
        img: github
    }
]

const Skills = () => {
    return (
        <div id='skillss' className='skills my-5 text-center '>
            <h4 className=' my-5 fs-2 text-success text-uppercase'> MY Skills</h4>
            <div className="container ">
                <div className="row ">
                <Fade bottom>

                    {
                        icons.map(icon =>
                            <div  className='col-lg-3 col-md-3 col-sm-4    mb-2 cent '>

                                <Card 
                                
                                data-aos="flip-left"
                                data-aos-duration="3000"
                                
                                style={{ width: '18rem' }} className='cardss h-100 w-75 text-center'>
                               
                                    <div className="text-center mt-2 pp">
                                        <Card.Img variant="top" src={icon.img} className='h-100 w-50 ' />

                                    </div>
                                    <Card.Body className='text-center p'>
                                        <Card.Title className='text-success fw-bold'>  {icon.name}</Card.Title>

                                    </Card.Body>
                                </Card>
                            </div>

                        )
                    }
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Skills;





