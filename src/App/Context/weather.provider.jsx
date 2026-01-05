import { createContext, useContext } from "react";
import axios from "axios";

const WeatherContext = createContext(null);

export const WeatherProvider = (props) => {
  return (
    <WeatherContext.Provider
      value={{ description: "rain on japan road to mt. fuji" }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
}

export const useWeather = () => {
  const weather = useContext(WeatherContext);

  if (weather === null) {
    throw new Error("useWeather must be used within AuthProvider");
  }

  return weather;
}
