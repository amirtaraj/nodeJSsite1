import React from 'react'
import infyImage from './assets/img/infy1.png';
import abbImage from './assets/img/abb1.png';
import tekImage from './assets/img/tek1.png';

export const About = () => (
  <div className="container">
  <div className="row">
    <div className="col-lg-12 text-center">
      
      <h3 className="section-subheading">My Professional Journey</h3>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-12">
      <ul className="timeline">
        <li>
        <h4>Infosys</h4>
            <img className="rounded-circle img-fluid" src={infyImage} alt="infylogo"/>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="text-muted">July 2014 - May 2019</h4>
              <h4  className="text-muted">Software Test Analyst</h4>
            </div>
            <div className="timeline-body">
              <p className="text-muted">Performance Testing, API Testing, UI Automation Testing - Selenium, Cross Browser/ device Testing, Web Application maintenance</p>
            </div>
          </div>
        </li>
        <li>
        <h4>ABB</h4>
          <img className="rounded-circle img-fluid" src={abbImage} alt="ABBImage"/>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="text-muted">May 2019 - Nov 2019</h4>
              <h4 className="text-muted">Sales Support Speacialist</h4>
            </div>
            <div className="timeline-body">
              <p className="text-muted">Application Maintenence and Setting up of UI Automation Framework using Selenium-TestNG</p>
            </div>
          </div>
          </li>
        <li>
          
          <h4>TekSystems</h4>
            <img className="rounded-circle img-fluid" src={tekImage} alt=""/>
         
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="text-muted">Nov 2019 - Present</h4>
              <h4 className="text-muted">Senior Software Engineer</h4>
            </div>
            <div className="timeline-body">
              <p className="text-muted">UI Automation Testing with Protractor - Cucumber BDD and Typescript language, API Testing, Performance Testing</p>
            </div>
          </div>
        </li>
        
      </ul>
    </div>
  </div>
</div>
)
