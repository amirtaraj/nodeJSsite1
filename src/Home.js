import React from 'react'
import './App.css';

export const Home = () => (
  
  <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 text-center">
         
          <h3 className="section-subheading text-muted">Click <a href="https://www.youtube.com/user/amirtaraj?sub_confirmation=1" class="btn btn-primary">SUBSCRIBE</a> for more content like this</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
        <iframe title="iFrame1" width="350" height="197" src="https://www.youtube.com/embed/dW_uIYY6vw8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h4 className="service-heading">Install MacOS Big Sur without Dev account and Quick Look</h4>
          <p className="text-muted">How to install MacOS Big Sur Dev Beta without Dev account and Quick look at the new interface and features.</p>
        </div>
        <div className="col-md-4">
          <iframe title="iFrame2" width="350" height="197" src="https://www.youtube.com/embed/CN7p6Kx3p7E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h4 className="service-heading">iPadOS 14 on iPad mini 4 and How to Install Dev Beta</h4>
          <p className="text-muted">iPadOS 14 on iPad mini 4 - How is the performance on 6 year old Apple A8 chip and new features overview.</p>
        </div>
        <div className="col-md-4">
        <iframe title="iFrame3" width="350" height="197" src="https://www.youtube.com/embed/1KqH25-UO7I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h4 className="service-heading">LG 25UM58 Review - The Best Work From Home Setup?</h4>
          <p className="text-muted">As we all are Working from Home, which one do you prefer, Dual monitor or an Ultrawide? Check this video to find out and more.</p>
        </div>
      </div>
    </div>
)
