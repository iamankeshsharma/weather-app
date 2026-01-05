import { createContext, useContext } from "react";
import { useWeather } from "./weather.provider";

const ImageContext = createContext(null);

export const ImageProvider = (props) => {
  const weather = useWeather();

  return (
    <ImageContext.Provider value={{ alt: "hello", src: "./assets/bg1.png" }}>
      {props.children}
    </ImageContext.Provider>
  );
};

export const useImage = () => {
  const image = useContext(ImageContext);

  if (image === null) {
    throw new Error("useImage must be used within ImageProvider");
  }

  return image;
};
