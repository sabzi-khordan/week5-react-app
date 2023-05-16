import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
            <ul className="text-start" >
                <li>
                <FormattedDate date={props.data.date} />
                </li>
                <li className="text-capitalize">
                 {props.data.description}
                </li>
            </ul>
            <div className="row">
                <div className="col-6     text-start" >
                    <img src={props.data.iconUrl} alt={props.data.description}/> 
                    <span className="temperature"> {Math.round(props.data.temperature)}</span>
                    <span className="unit">℃</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                            Precipitation:20
                        </li>
                        <li>
                         Humidity:{props.data.humidity}%
                        </li>
                        <li>
                            wind: {props.data.wind} Km/h
                        </li>
                    </ul>
                </div>
            </div>
    </div>
  );
}