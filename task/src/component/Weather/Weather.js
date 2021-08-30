import React from "react";
import "./Weather.scss";

const Weather = (props) => {
  const press = Math.round(props.pressure * 0.007500637554192211 * 100);
  const temp = Math.round(props.temp);
  const icon = props.icon;
  const images = "http://openweathermap.org/img/w/" + icon + ".png";
  return (
    <div className="row">
      {props.city && (
        <div>
          <input className="range" id="font-size-control" type="range" />
          <h2>
            {props.city},{props.country}
          </h2>
          <img src={images} width="100px" alt="icon" />
          <p>
            Температура: {temp} {"\u00b0"}
          </p>
          <p>Давление: {press} mm</p>
          <p>Влажность: {props.humidity} %</p>
          <p>Описание: {props.description}</p>
          <p>Cкорость ветра: {props.speed} m/s</p>
        </div>
      )}
      <p>{props.error}</p>
    </div>
  );
};

export default Weather;
