import { useEffect } from "react";
import Background from "@/App/components/Background";
import "@/App/index.css";

import { Card } from "@/App/components/Card";
import { WeatherProvider, ImageProvider } from "./context";
import FavoriteLocation from "./components/FavoriteLocation";
import CurrentWeather from "./components/CurrentWeather";
import useStorage from "./hooks/storage";

function App() {
  const [favorite, setFavorite] = useStorage("favoriteLocation");

  useEffect(() => {
    setFavorite({
        name: "Gurugram",
        lat: 28.4646148,
        lon: 77.0299194,
        country: "IN",
        state: "Haryana",
      });
  }, []);

  return (
    <WeatherProvider>
      <ImageProvider>
        <main>
          <Background />

          <div className="weather">
            <div className="weather-container">
              <div className="current-n-glimpse">
                <div className="search-container"></div>
                <div className="greeting-container">
                  <Card className="greeting"></Card>
                  <CurrentWeather />
                  <FavoriteLocation />
                </div>
              </div>

              <div className="history"></div>
            </div>
          </div>
        </main>
      </ImageProvider>
    </WeatherProvider>
  );
}

export default App;
