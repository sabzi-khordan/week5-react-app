import React ,{useState} from "react";
import axios from "axios";
import "./Weather.css";
export default function  Weather(props){
    
    const[weatherData,setWeatherData]=useState({ready:false});

    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature:response.data.main.temp,
            humidity:response.data.main.humidity,
            iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            description: response.data.weather[0].description,
            wind:response.data.wind.speed,
            city:response.data.name
        })
        
        
    }
    if( weatherData.ready){
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
            <h1>{weatherData.city}</h1>
            <ul className="text-start" >
                <li>
                    wednesday 
                </li>
                <li className="text-capitalize">
                 {weatherData.description}
                </li>
            </ul>
            <div className="row">
                <div className="col-6     text-start" >
                    <img src={weatherData.iconUrl} alt={weatherData.description}/> 
                    <span className="temperature"> {Math.round(weatherData.temperature)}</span>
                    <span className="unit">℃</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                            Precipitation:20
                        </li>
                        <li>
                         Humidity:{weatherData.humidity}%
                        </li>
                        <li>
                            wind: {weatherData.wind} Km/h
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

    }else{
        let apiKey="0bfb3b656ee7a30b48d0696156d040e0";
        let city="London"
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse)

        return "Loading ...."
    }




    
    

}