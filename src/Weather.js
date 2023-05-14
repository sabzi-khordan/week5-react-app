import React from "react";
import "./Weather.css";
export default function  Weather(){
    return(
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search"   placeholder="Search for a city ...."
                className="form-control"   autoFocus="on"/>
                </div>
                <div className="col-3">
                <input type="submit" value="search" className="btn btn-primary   w-100"/>
                </div>
                </div>
            </form>
            <h1>New York</h1>
            <ul className="text-start" >
                <li>
                    wednesday 
                </li>
                <li>    Moustly Cloudy

                </li>
            </ul>
            <div className="row">
                <div className="col-6     text-start" >
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="" /> 
                    <span className="temperature">6</span>
                    <span className="unit">℃</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                            Precipitation:20
                        </li>
                        <li>
                            Humidity :10
                        </li>
                        <li>
                            wind: 20 Km/h
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}