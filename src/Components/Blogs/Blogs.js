import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs'>
            <Container>
             <Fade top>
             <h2 style={{color: 'salmon'}}>Blogs is Comming Soon</h2>  
             <p>Fewer people read your blog posts than you think. More people read your 
                 <br /> headline than you think, too.</p>      
             </Fade>
                <Row>
                    <Col md={4} xs={12} className="my-2 blogs"> 
                        <div className='blog-card'>
                        <img className='blog_img' src={'https://cdn.pixabay.com/photo/2015/09/04/23/28/wordpress-923188__340.jpg'} alt=""/>
                        <div className='img_overlay img_overlay--primary'>
                        <div className='blog_title'>
                            Development
                        </div>
                        <p className='blog_text'>
                        Getting tickets to the big show
                        </p>
                        <a href="#" className="blog project__btn btn">Read More</a>
                        </div>
                        </div>
                    </Col>
                    <Col md={4} xs={12} className="my-2"> 
                        <div className='blog-card'>
                        <img className='blog_img' src={'https://cdn.pixabay.com/photo/2015/09/04/23/28/wordpress-923188__340.jpg'} alt=""/>
                        <div className='img_overlay img_overlay--primary'>
                        <div className='blog_title'>
                            Development
                        </div>
                        <p className='blog_text'>
                        Getting tickets to the big show
                        </p>
                        <a href="#" className="blog project__btn btn">Read More</a>
                        </div>
                        </div>
                    </Col>
                    <Col md={4} xs={12} className="my-2"> 
                        <div className='blog-card'>
                        <img className='blog_img' src={'https://cdn.pixabay.com/photo/2015/09/04/23/28/wordpress-923188__340.jpg'} alt=""/>
                        <div className='img_overlay img_overlay--primary'>
                        <div className='blog_title'>
                            Development
                        </div>
                        <p className='blog_text'>
                        Getting tickets to the big show
                        </p>
                        <a href="#" className="blog project__btn btn">Read More</a>
                        </div>
                        </div>
                    </Col>
                  
                    
                </Row>
            </Container>
            
        </div>
    );
};

export default Blogs;