import React from 'react'
import coronaDash from './assets/img/coronaDash.png';
import nto5mac1 from './assets/img/9to5mac1.png';
import tbhp from './assets/img/tbhp.png';
import appleGlass from './assets/img/appleGlass12.jpg';
import mkbhdW from './assets/img/mkbhd11.png';
import spaceX from './assets/img/spaceX1.jpg';
import appleclogo from './assets/img/appleclogo.jpg';
import cardisc from './assets/img/cardisc.jpg';
import appomt from './assets/img/appomt.jpg';


export const News = () => (
  <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">News Today</h2>

<table>
  <tr>
  <th>SOFTWARE UPDATES (Updated 07Mar2021) - </th>
    <th>iOS |</th>
    <th>iPadOS |</th>
    <th>macOS |</th>
    <th>watchOS |</th>
    <th>tvOS </th>
  </tr>
  <tr>
  <td></td>
    <td>14.4</td>
    <td>14.4</td>
    <td>11.2.2</td>
    <td>7.3.1</td>
    <td>14.4</td>
  </tr>
</table>
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
                        <a className="portfolio-link" data-toggle="modal" href="https://9to5mac.com/2021/03/08/first-apple-event-of-the-year-rumored-for-march-23rd/">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={appomt} alt="9to5Mac" />
                        </a>
                        <div className="portfolio-caption">
                            <h4>Apple Spring surprise! 23rd March</h4>
                            <p className="text-muted">AirTags | AirPods | iPad Pro | AppleTV</p>
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
                            <h4>Big Discount offers on Cars in March 2021</h4>
                            <p className="text-muted">March 2021 Discount Schemes, March 2021</p>
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
                            <p className="text-muted">Chat with Specialists. Apple Trade In. No-contact delivery. And Apple Support.</p>
                        </div>
                    </div>
            }
            {
                    <div className="col-md-4 col-sm-6 portfolio-item">
                        <a className="portfolio-link" data-toggle="modal" href="https://www.isro.gov.in/launcher/pslv-c51-amazonia-1">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={spaceX} alt="9to5Mac" />
                        </a>
                        <div className="portfolio-caption">
                            <h4>PSLV-C51/Amazonia-1 </h4>
                            <p className="text-muted">PSLV-C51, the first dedicated launch for NSIL, successfully launches Amazonia-1 and 18 Co-passenger satellites from Sriharikota</p>
                        </div>
                    </div>
            }
            {
                    <div className="col-md-4 col-sm-6 portfolio-item">
                        <a className="portfolio-link" data-toggle="modal" href="https://www.cnet.com/news/apple-glasses-leaks-and-rumors-heres-everything-we-expect-to-see-next-big-product/">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={appleGlass} alt="9to5Mac" />
                        </a>
                        <div className="portfolio-caption">
                            <h4>Apple Glasses</h4>
                            <p className="text-muted">Apple's AR Glasses! HERE YOU GO! Design, Name, Price, Release date, and more - CNET</p>
                        </div>
                    </div>
            }
            {
                    <div className="col-md-4 col-sm-6 portfolio-item">
                        <a className="portfolio-link" data-toggle="modal" href="http://t.co/Oqf73Ews?amp=1">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={mkbhdW} alt="9to5Mac" />
                        </a>
                        <div className="portfolio-caption">
                            <h4>Wallpaper Collection - MKBHD</h4>
                            <p className="text-muted">I swear the best wallpapers are found in the background of YouTube videos - MKBHD</p>
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
                            <h4>iPhone 12, 12Max and iPhone 12 Pro</h4>
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

