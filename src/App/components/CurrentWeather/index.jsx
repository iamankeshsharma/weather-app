import { Card, Title, Body, Footer } from "@/App/components/Card";
import { useWeather } from "../../Context";
import { useEffect, useState } from "react";

const toTitleCase = (x) => {
  // Function to convert a string into Title Case.
  if (x) {
    x = x.toLowerCase();
    x = x.split(" ");
    x = x.map((i) => {
      i = i.split("");
      i = i.map((j, index) => {
        if (index === 0) {
          return j.toUpperCase();
        }
        return j;
      });
      return i.join("");
    });
    return x.join(" ");
  }
};

// Function to get Locale time string from provided datetime value.
const getLocaleTimeString = (dt) => new Date(Date(dt)).toLocaleTimeString(undefined, {hour:"2-digit", minute:"2-digit"});

const CurrentWeather = (props) => {
  const weatherData = useWeather();
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (weatherData) {
      setWeather(weatherData);
    }
  }, [weatherData]);

  return (
    <Card className="hero">
      <Title className="head">
        <p className="main-title">Current Weather {weather?.name}</p>
        <p className="sub-title">{getLocaleTimeString(weather?.dt)}</p>
      </Title>

      <Body className="temprature">
        <span className="value">{Math.floor(weather?.main?.temp) ?? ''}&deg;C</span>
        <span className="description">
          {toTitleCase(weather?.weather[0]?.description)}
        </span>
      </Body>

      <Footer className="stats">
        <div className="temp-stat">
          <p className="property">Humidity</p>
          <p className="value">{weather?.main?.humidity}</p>
        </div>
        <div className="temp-stat">
          <p className="property">Wind Speed</p>
          <p className="value">{weather?.wind?.speed} m/s</p>
        </div>
        <div className="temp-stat">
          <p className="property">Visibility</p>
          <p className="value">{weather?.visibility}</p>
        </div>
        <div className="temp-stat">
          <p className="property">Pressure</p>
          <p className="value">{weather?.main?.pressure} N/m <sup>2</sup></p>
        </div>
      </Footer>
    </Card>
  );
};

export default CurrentWeather;
