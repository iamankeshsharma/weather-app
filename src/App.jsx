import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [coordinates, setCoordinates] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    // Fetch the weather data
    const API_KEY = import.meta.env.VITE_OPEN_WEATHER_SECRET_KEY;
    const url = `${import.meta.env.VITE_OPEN_WEATHER_BASE_URL}weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error("error"));
    setCoordinates({ latitude, longitude });
  });
  useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);

  return (
    <>
      {coordinates && (
        <>
          <h1>{coordinates.latitude}</h1>
          <h1>{coordinates.longitude}</h1>
        </>
      )}
    </>
  );
}

export default App;
