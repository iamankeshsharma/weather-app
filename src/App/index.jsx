import Background from "@/App/components/Background";
import "@/App/index.css";

import { WeatherProvider, ImageProvider } from "./Context";
import CurrentWeather from "./components/CurrentWeather";
import {Card} from "@/App/components/Card";

function App() {
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
                  <Card className="favorite"></Card>
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
