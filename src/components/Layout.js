import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .container {
    background-color: black;
  }

  .container-xl {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  
`;


export const Layout = (props) => (
  <Styles>
  <Container>
   
    
    {props.children}
   
    
  </Container>
  </Styles>
)
