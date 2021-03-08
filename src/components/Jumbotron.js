import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import lambo from '../assets/img/lambo.png';



export const Jumbotron = () => (
 
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <br></br>
        <div class="centered">Nice to see you again :) Checkout the newly updated News section too :)<img className="img-fluid" src={lambo} alt="header" /></div>
      </Container>
    </Jumbo>

)
