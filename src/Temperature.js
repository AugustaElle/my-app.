import React, { useState } from "react";
import './Temperature.css';
import axios from 'axios';
import UpdatedDate from './UpdatedDate';

export default function Temperature (props) {
    const [weatherInfo, setWeatherInfo] = useState({input : false});
    const [city, setCity]= useState(props.city);


    function showTemp(response) {
        setWeatherInfo({
        input : true,
        temperature : (Math.round(response.data.main.temp)),
        city: (response.data.name),
        date : new Date(response.data.dt * 1000),
        wind :(response.data.wind.speed),
        humidity : (Math.round(response.data.main.humidity)),
        description :(response.data.weather[0].description),
        icon:`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        feelsLike : (Math.round(response.data.main.feels_like))});
    }

function searchForm () {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9bcab27e2586a82d6ff0a45c0b3f6c89&units=metric`;
    axios.get(url).then(showTemp);
}



    function inputCity(event) {
        event.preventDefault();
        searchForm();
    }

    function displayCity (event) {
    setCity(event.target.value);
    }


        if (weatherInfo.input) {
return ( 
    <div className="Temperature">
     <div className="weather-wrapping">
    <div className="row">
     <div className="col-6">
         <h1 id="current-city">{city}</h1>
         <h2 className="description text-capitalize" id="sky-description">{weatherInfo.description}</h2>
        <div className="clearfix">
             <img src={weatherInfo.icon} alt="Icon" id="weather-icon"/>
             <h2 className="present-day-temp float-left"> <span id="current-temperature">
{weatherInfo.temperature} </span><span className="conversion">°C|°F</span></h2></div>  <div>

   </div> 
     </div>
     <div className="col-6">
         <ul>
             <li>Feels Like: <span id="feels-like">  {weatherInfo.feelsLike}</span> </li>
             <li>Humidity: <span id="humidity">  {weatherInfo.humidity} </span>%</li>  
             <li>Wind: <span id="windspeed">  {weatherInfo.wind}</span> km/h</li>
         </ul>
     </div>
    </div>
    <div className="row">
        <div className="col-4">
        <form  id="search-form" onSubmit={inputCity}>
        <input type="text"
        placeholder="Enter city name"
        autocomplete="off"
        autofocus="on"
        id="entered-city"
        className="form-control" onChange={displayCity}/>
        <input type="submit"  className="btn btn-dark"
        value="Search!"/>
      </form></div></div>
      <div className="row">
        <div className="col">
          <p>As of: <UpdatedDate date={weatherInfo.date}/></p>
        </div>
        </div>  
    </div>      
    </div>
  );
} else {
searchForm () ;
return `loading..`;
 }}
