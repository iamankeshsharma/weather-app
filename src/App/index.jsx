import Background from "./components/Background";
import "./index.css";

import { Weather } from "./Context/weather.provider";
import { ImageDictionary } from "./Context/imageDictonary.provider";

function App() {
  return (
    <main>
      <Weather>
        <ImageDictionary>
          <Background />
        </ImageDictionary>
      </Weather>
    </main>
  );
}

export default App;
