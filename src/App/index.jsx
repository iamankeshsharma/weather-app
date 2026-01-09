import Background from "@/App/components/Background";
import "@/App/index.css";

import { WeatherProvider, ImageProvider } from "./Context";

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
                  <div className="card greeting"></div>
                  <div className="card hero"></div>
                  <div className="card favorite"></div>
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
