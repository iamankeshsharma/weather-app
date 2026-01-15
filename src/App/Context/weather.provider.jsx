import { createContext, useContext, useEffect, useState } from "react";
import { fetchWeather } from "@/shared/api";

const WeatherContext = createContext(null);

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((x) =>
      fetchWeather(x.coords.latitude, x.coords.longitude).then((res) => {
        if (res.status == 200) {
          setData(res.data);
        }
      })
    );
  }, []);

  return (
    <WeatherContext.Provider value={data ?? ""}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const weather = useContext(WeatherContext);

  if (weather === null) {
    throw new Error("useWeather must be used within WeatherProvider");
  }

  return weather;
};
