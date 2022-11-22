import React from "react";
import "./App.css";
import DarkMode from "./DarkMode";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DarkMode />
        
        <p>
        <h3>Click <a href="https://www.youtube.com/user/amirtaraj?sub_confirmation=1">SUBSCRIBE</a> for more content like this</h3>
        </p>
        <div className="col-md-1">
        <iframe title="iFrame54" width="350" height="197" src="https://www.youtube.com/embed/NLJCVvuyUYQ"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          <h4 className="service-heading">Logitech MX Master 2S vs 3 vs 3S</h4>
          <p className="text-muted">Best Ergonomic mouse</p>
        </div>
        <div className="col-md-2">
        <iframe title="iFrame54" width="350" height="197" src="https://www.youtube.com/embed/JuOdDPzTTKw"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          <h4 className="service-heading">Karnataka's first Ferrari 812 GTS at Mysuru</h4>
          <p className="text-muted">Uninterrupted V12 Symphony </p>
        </div>

      </header>
    </div>
  );
}

export default App;
