import React from 'react';
import './Temperature.css';

export default function Temperature () {
return (
    <div className="App">
      <div className="container">
      <div className="app-wrapping">
     <div className="weather-wrapping">
    <div className="row">
     <div className="col-6">
         <h1 id="current-city">New York</h1>
         <h2 className="description" id="sky-description">Sunny</h2>
        <div className="clearfix">
             <img src="#" alt="Icon" id="weather-icon"/>
              <h2 className="present-day-temp float-left"> <span id="current-temperature">30</span>°</h2></div>
     </div>
     <div className="col-5">
         <ul>
             <li>Feels Like: <span id="feels-like">  32</span> </li>
             <li>Humidity: <span id="humidity">  20</span>%</li>  
             <li>Wind: <span id="windspeed">  0</span> km/h</li>
         </ul>
     </div>
     <div className="col-1"> <p>°<a href="#" id="convert-celsius">C</a>|°<a href="#" id="convert-farhenheit">F</a></p></div>
    </div>
    <div className="row">
        <div className="col-4">
  <form id="search-form">
        <input type="text"
        placeholder="Enter city name"
        autocomplete="off"
        autofocus="on"
        id="entered-city"
        className="form-control"/>
        <input type="submit"  class="btn btn-dark"
        value="Search!"/>
      </form></div></div>
      <div className="row">
        <div className="col">
          <p>As of 8am EST</p>
        </div>
        </div>  
    </div>      
    </div></div></div>
  );
}

