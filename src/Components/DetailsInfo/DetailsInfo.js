import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { UserContext } from '../../App';

const DetailsInfo = () => {
        const {cart} = useContext(UserContext);


    return (
        <Container className="pt-5">
                <h1 className="text-center" style={{color:"crimson"}} >❖ {cart.name}</h1>
                <img className="text-center" style={{width:"50%",height:"auto"}} src={cart.img} alt="" />
                <p className="pt-3" style={{color:"#212529", fontSize:"15px" }} >
                    <ul>
                    <li>{cart.one}</li>
                    <li>{cart.two}</li>
                    <li> {cart.three}</li>
                    <li>{cart.four}</li>
                    </ul>
                    </p>
                
                <a target="_blank" href="https://github.com/Supriya-debnath">Github Link</a>
                <br />
                <a target="_blank" href={cart.link} >Live Link</a>
                <br />
                <a target="_blank" href={cart.client} >Client side</a>
                <br />
                <a target="_blank" href={cart.server} >Server side</a>
                
            </Container>
    );
};

export default DetailsInfo;