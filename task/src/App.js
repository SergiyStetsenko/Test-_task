import React from "react";
import "./App.css";
import Form from "./component/Form/form";

import Navbar from "./component/Navbar/Navbar";

import UsePositionDemo from "./component/position";

import Weather from "./component/Weather/Weather";
const KEY = "411db9b3794883c087439e6ee04dd949";

class App extends React.Component {
  state = {
    city: undefined,
    temp: undefined,
    country: undefined,
    pressure: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    speed: undefined,
    error: undefined,
  };

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if (city) {
      const api_url =
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}
    &appid=${KEY}&units=metric&lang=ru`);
      const data = await api_url.json();
      this.setState({
        city: data.name,
        temp: data.main.temp,
        country: data.sys.country,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        speed: data.wind.speed,
        error: undefined,
      });
    } else {
      this.setState({
        city: undefined,
        temp: undefined,
        error: "Введите названия города для получения погоды",
      });
    }
  };
  render() {
    return (
      <>
        <Navbar />
        <div className="App">
          <UsePositionDemo />
          <Form weatherMethod={this.getWeather} />
          <Weather
            temp={this.state.temp}
            city={this.state.city}
            country={this.state.country}
            pressure={this.state.pressure}
            humidity={this.state.humidity}
            description={this.state.description}
            icon={this.state.icon}
            speed={this.state.speed}
            error={this.state.error}
          />
        </div>
      </>
    );
  }
}

export default App;
