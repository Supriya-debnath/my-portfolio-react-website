import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './MyServices.css';

const MyServices = () => {
    return (
        <div className="experience">
            <Container>
                <h4 className="title">My Services</h4>
                <h2 className='hire'>I'm Available For Hire</h2>
                <Row>
                    <Col md={4} xs={12} className="my-2">
                        <div className="experience-card">
                        <i class="fas fa-pen-nib"></i>                            
                        <h2>Design</h2>
                            <p>
                            Nec nulla feugiat tortor ipsum vel imperdiet magna tempus porta ridiculus molestie quis non nam mauris Vehicula. Fringilla, tellus. 
                            </p>
                        </div>
                    </Col>
                    <Col md={4} xs={12} className="my-2">
                        <div className="experience-card">
                            <i className="fas fa-globe"></i>
                            <h2>Marketing</h2>
                            <p>
                            Nec nulla feugiat tortor ipsum vel imperdiet magna tempus porta ridiculus molestie quis non nam mauris Vehicula. Fringilla, tellus.
                            </p>
                        </div>
                    </Col>
                   
                    <Col md={4} xs={12} className="my-2">
                        <div className="experience-card">
                            <i className="fas fa-wallet"></i>
                            <h2>Development</h2>
                            <p>
                            Nec nulla feugiat tortor ipsum vel imperdiet magna tempus porta ridiculus molestie quis non nam mauris Vehicula. Fringilla, tellus.
                            </p>
                        </div>
                    </Col>
                   
                </Row>
            </Container>
        </div>
    );
};

export default MyServices;


