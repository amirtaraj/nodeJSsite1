import React from 'react'
import coronaDash from './assets/img/tbhp.png';
import appleclogo from './assets/img/appleclogo.jpg';
import cardisc from './assets/img/cardisc.jpg';


export const News = () => (
  <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
             
              <h3 className="section-subheading">News Today</h3>

<table>
  <tr>
  <th>APPLE SOFTWARE UPDATES (Updated 30Mar2022) - </th>
    <th>iOS |</th>
    <th>iPadOS |</th>
    <th>macOS |</th>
    <th>watchOS |</th>
    <th>tvOS </th>
  </tr>
  <tr>
  <td></td>
    <td>15.4.1</td>
    <td>15.4.1</td>
    <td>12.3.1</td>
    <td>8.5.1</td>
    <td>15.4.1</td>
  </tr>
</table>
<br></br>
            </div>
          </div>
          <div className="row">
          
            {
                    <div className="col-md-4 col-sm-6 portfolio-item">
                        <a className="portfolio-link" data-toggle="modal" href="https://www.mycarhelpline.com/index.php?option=com_offers&view=list&Itemid=9">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={cardisc} alt="9to5Mac" />
                        </a>
                        <div className="portfolio-caption">
                            <h4>Big Discount offers - Apr 2022</h4>
                            <p className="text-muted">April 2022 Discount Schemes for Cars in India</p>
                        </div>
                    </div>
            }
              {
                    <div className="col-md-4 col-sm-6 portfolio-item">
                        <a className="portfolio-link" data-toggle="modal" href="https://www.team-bhp.com/">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={coronaDash} alt="coronaDash" />
                        </a>
                        <div className="portfolio-caption">
                            <h4>TeamBhp - Automotive Scene </h4>
                            <p className="text-muted">All about Indian Automotive scene</p>
                        </div>
                    </div>
            }
            
            {
                    <div className="col-md-4 col-sm-6 portfolio-item">
                        <a className="portfolio-link" data-toggle="modal" href="https://www.apple.com/in/shop">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={appleclogo} alt="ApplecInc" />
                        </a>
                        <div className="portfolio-caption">
                            <h4>Apple India | Official Store</h4>
                            <p className="text-muted">Checkout all available Apple Products in India</p>
                        </div>
                    </div>
            }
           
          </div>
        </div>
  
)

