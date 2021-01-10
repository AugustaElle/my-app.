import './App.css';
import Temperature from "./Temperature"

function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="app-wrapping">
     <div className="weather-wrapping">
    <div className="row">
     <div className="col-6">
         <h1 id="current-city"></h1>
         <h2 className="description" id="sky-description"></h2>
        <div className="clearfix">
             <img src="#" alt="Icon" class="float-left" id="weather-icon"/>
              <h2 class="present-day-temp float-left"> <span id="current-temperature"></span>°</h2></div>
     </div>
     <div className="col-5">
         <ul>
             <li>Feels Like: <span id="feels-like">  </span> </li>
             <li>Humidity: <span id="humidity">  </span>%</li>  
             <li>Wind: <span id="windspeed">  </span> km/h</li>
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
          <p>As of <span id="update-time"></span> EST</p>
        </div>
        </div>  
    </div>      
      <footer>Coded by Leah L.  See my open source code on <a href="https://github.com/AugustaElle/my-app." target="_blank" rel="noopener noreferrer"> Github </a></footer>
    </div></div></div>
  );
}

export default App;
