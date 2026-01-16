import { Card, Title, Body, Footer } from "@/App/components/Card";
import { useWeather } from "@/App/context";
import { useEffect, useState } from "react";
import WeatherStats from "../WeatherStats";
import {useTitleCase} from "@/App/hooks/utility";
import "./index.css";

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
          {useTitleCase(weather?.weather[0]?.description)}
        </span>
      </Body>

      <Footer className="stats">
       <WeatherStats {...weather}/>
      </Footer>
    </Card>
  );
};

export default CurrentWeather;
