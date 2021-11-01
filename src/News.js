import React from 'react'
import coronaDash from './assets/img/coronaDash.png';
import appleclogo from './assets/img/appleclogo.jpg';
import cardisc from './assets/img/cardisc.jpg';


export const News = () => (
  <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">News Today</h2>

<table>
  <tr>
  <th>APPLE SOFTWARE UPDATES (Updated 02Nov2021) - </th>
    <th>iOS |</th>
    <th>iPadOS |</th>
    <th>macOS |</th>
    <th>watchOS |</th>
    <th>tvOS </th>
  </tr>
  <tr>
  <td></td>
    <td>15.1</td>
    <td>15.1</td>
    <td>12.0.1</td>
    <td>8.1</td>
    <td>15.1.1</td>
  </tr>
</table>
<br></br>
            </div>
          </div>
          <div className="row">
            {
                    <div className="col-md-4 col-sm-6 portfolio-item">
                        <a className="portfolio-link" data-toggle="modal" href="https://www.covid19india.org/">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={coronaDash} alt="coronaDash" />
                        </a>
                        <div className="portfolio-caption">
                            <h4>Corona Dashboard - India</h4>
                            <p className="text-muted">Go Corona..Corona Go - Stay Safe</p>
                        </div>
                    </div>
            }
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
                            <h4>Big Discount offers - Nov 2021</h4>
                            <p className="text-muted">November 2021 Discount Schemes for Cars in India</p>
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

