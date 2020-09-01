import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import lambo from '../assets/img/lambo.png';



export const Jumbotron = () => (
 
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <br></br>
        <h4 className="section-subheading text-muted">Amirtaraj R</h4> 
        <img className="img-fluid" src={lambo} alt="header" />
        <h5 calssName="section-subheading text-muted" align="center">Nice to see you again :) </h5>
      </Container>
    </Jumbo>

)
