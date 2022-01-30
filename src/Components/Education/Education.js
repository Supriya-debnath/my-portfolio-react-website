import React from 'react';
import { Container } from 'react-bootstrap';
import './Education.css';

const Education = () => {
    return (
        <Container>
            <div className='expert'>
            <div className='education'>
            <h2 className='title'> Education</h2>
            <h5 className='year'>2018</h5>
            <h5><em>Computer Science Engineering, City University</em></h5>  
            <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p> 
            <br/> 
            <hr></hr>
            <h5 className='year'>2018</h5>
            <h5><em>Computer Science Engineering, City University</em></h5>  
            <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p> 
            <br/> 
            <hr></hr>
            <h5 className='year'>2021</h5>
            <h5><em>Web Development, Programming Hero</em></h5>  
            <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p> 


        </div>
        <div className='experiences'>
            <h2 className='title'>Experiences</h2>
            <h5 className='year'>2020</h5>
            <h5><em>Fulltime Freelancer, Fiveer</em></h5>
            <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.
            </p>
            <br/> 
            <hr></hr>
            <h5 className='year'>2020</h5>
            <h5><em>Full-stack Developer</em></h5>
            <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.
            </p>
            <br/> 
            <hr></hr>
            <h5 className='year'>2020</h5>
            <h5><em>Web Designer at Microsoft</em></h5>
            <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.
            </p>
        </div>
        </div>
        </Container>
    );
};

export default Education;