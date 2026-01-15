import Background from "@/App/components/Background";
import "@/App/index.css";

import { WeatherProvider, ImageProvider } from "./Context";
import { Body, Card, Footer, Title } from "./components/Card";

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
                  <Card className="hero">
                    <Title className="head">
                      <p className="main-title">Current Weather</p>
                      <p className="sub-title">6:48 PM</p>
                    </Title>

                    <Body className="temprature">
                      <span className="value">45 &deg; C</span>
                      <span className="description">Clear</span>
                    </Body>

                    <Footer className="stats">
                      <div className="temp-stat">
                        <p className="property">Air Quality</p>
                        <p className="value">255</p>
                      </div>
                      <div className="temp-stat">
                        <p className="property">Humidity</p>
                        <p className="value">268</p>
                      </div>
                      <div className="temp-stat">
                        <p className="property">Wind</p>
                        <p className="value">158</p>
                      </div>
                      <div className="temp-stat">
                        <p className="property">Visibility</p>
                        <p className="value">1000</p>
                      </div>
                      <div className="temp-stat">
                        <p className="property">Pressure</p>
                        <p className="value">10</p>
                      </div>
                    </Footer>
                  </Card>
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
