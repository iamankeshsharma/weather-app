import "@/App/index.css";

import Background from "@/App/components/Background";
import FavoriteLocation from "./components/FavoriteLocation";
import CurrentWeather from "./components/CurrentWeather";
import LocationSearch from "./components/LocationSearch";
import useStorage from "./hooks/storage";
import { WeatherProvider, ImageProvider } from "@/App/Context";
import Greeting from "./components/Greeting";

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
                  <Greeting/>
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
