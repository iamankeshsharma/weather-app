import Background from "@/App/components/Background";
import "@/App/index.css";

import { WeatherProvider, ImageProvider } from "./Context";

function App() {
  return (
    <WeatherProvider>
      <ImageProvider>
        <main>
          <Background />

          <div className="weather-container">
            <div className="current-n-glimpse">
              <div></div>
              <div className="greeting-container">
                <div className="card"></div>
                <div className="greeting"></div>
                <div className="hero"></div>
              </div>
            </div>
            <div></div>
          </div>
        </main>
      </ImageProvider>
    </WeatherProvider>
  );
}

export default App;
