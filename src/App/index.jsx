import { useEffect } from "react";
import "@/App/index.css";

import Background from "@/App/components/Background";
import { Card } from "@/App/components/Card";
import FavoriteLocation from "./components/FavoriteLocation";
import CurrentWeather from "./components/CurrentWeather";
import LocationSearch from "./components/LocationSearch";
import useStorage from "./hooks/storage";
import { WeatherProvider, ImageProvider } from "@/App/Context";

function App() {
  const [favorite, setFavorite] = useStorage("favoriteLocation");

  return (
    <WeatherProvider>
      <ImageProvider>
        <main>
          <Background />

          <div className="weather">
            <div className="weather-container">
              <div className="current-n-glimpse">
                <LocationSearch favorite={favorite} setFavorite={setFavorite}/>
                <div className="greeting-container">
                  <Card className="greeting"></Card>
                  <CurrentWeather />
                  <FavoriteLocation favorite={favorite}/>
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
