import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import lambo from '../assets/img/lambo.png';



export const Jumbotron = () => (
 
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <br></br>
        <h4>NICE TO SEE YOU AGAIN :)</h4>
        <img className="img-fluid" src={lambo} alt="header" />
      </Container>
    </Jumbo>

)
