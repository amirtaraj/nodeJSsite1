import React from 'react'
import coronaDash from './assets/img/coronaDash.png';
import nto5mac1 from './assets/img/9to5mac1.png';
import tbhp from './assets/img/tbhp.png';


export const News = () => (
  <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">News</h2>
              <h3 className="section-subheading text-muted">Whats New in Tech and Whats happening arund us.</h3>
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
                            <p className="text-muted">Go Corona..Corona Go - Flaten the Curve, so Stay Home, Stay Safe</p>
                        </div>
                    </div>
            }
             {
                    <div className="col-md-4 col-sm-6 portfolio-item">
                        <a className="portfolio-link" data-toggle="modal" href="https://9to5mac.com/2020/04/14/iphone-12-features-release-date/">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={nto5mac1} alt="9to5Mac" />
                        </a>
                        <div className="portfolio-caption">
                            <h4>iPhone 12 and iPhone 12 Pro</h4>
                            <p className="text-muted">What do we know about new iPhones coming this fall - from 9to5Mac</p>
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
                            <img className="img-fluid" src={tbhp} alt="tbhp" />
                        </a>
                        <div className="portfolio-caption">
                            <h4>Team-BHP</h4>
                            <p className="text-muted">The most trusted, detailed and unbiased Car Reviews and News in India.</p>
                        </div>
                    </div>
            }
          </div>
        </div>
  
)

