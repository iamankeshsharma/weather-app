import Background from "@/App/components/Background";
import "@/App/index.css";

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
