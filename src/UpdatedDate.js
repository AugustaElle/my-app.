import React from "react";

export default function UpdatedDate (props) {
     let days = [
      "Sun",
      "Mon",
      "Tues",
      "Wed",
      "Thurs",
      "Fri",
      "Sat"
    ]; 
let day = days[props.date.getDay()];
let hours = props.date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
let minutes = props.date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month = months[props.date.getMonth()];
let date = props.date.getDate();

return ( <div> {day} {month} {date} at {hours}:{minutes} </div>);
}