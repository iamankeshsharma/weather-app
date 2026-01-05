import Background from "./components/Background";
import "./index.css";

import { WeatherProvider, ImageProvider } from "./Context";

function App() {
  return (
    <main>
      <WeatherProvider>
        <ImageProvider>
          <Background />
        </ImageProvider>
      </WeatherProvider>
    </main>
  );
}

export default App;
