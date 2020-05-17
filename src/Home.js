import React from 'react'
import './App.css';

export const Home = () => (
  
  <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">My Channel</h2>
          <h3 className="section-subheading text-muted">Click <a href="https://www.youtube.com/user/amirtaraj?sub_confirmation=1" class="btn btn-primary">SUBSCRIBE</a> for more content like this</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
            <iframe title="iFrame1" width="350" height="197" src="https://www.youtube.com/embed/W0GtTNxcJ7o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="yes"></iframe>
          <h4 className="service-heading">RetroTech - iPhone 4S</h4>
          <p className="text-muted">How is it using iPhone 4S in 2020 on iOS6 vs iOS9? Lets get some Nostalgia and pure skeuomorphism [in 8K ProRes]</p>
        </div>
        <div className="col-md-4">
            <iframe title="iFrame2" width="350" height="197" src="https://www.youtube.com/embed/xXcVtj8wG3A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="yes"></iframe>
          <h4 className="service-heading">Review - Apple Watch Series 4</h4>
          <p className="text-muted">Apple Watch Series 4 review in 2019 with WatchOS 6 compared to Series 5, is it worth it? and Series 3, is it better than it?</p>
        </div>
        <div className="col-md-4">
        <iframe title="iFrame3" width="350" height="197" src="https://www.youtube.com/embed/OE3ibgXKo4M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="yes"></iframe>
          <h4 className="service-heading">Lamborghini GIRO - 2018</h4>
          <p className="text-muted">16 Bulls participated- Huracan x10, Huracan Spyder, Aventador Roadster, Aventador SV Roadster and Gallardo x3</p>
        </div>
      </div>
    </div>
)
