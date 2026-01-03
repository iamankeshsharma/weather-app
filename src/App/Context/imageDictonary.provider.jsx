import React, { createContext, useContext } from "react";
import { WeatherContext } from "./weather.provider";
import axios from "axios";

export const ImageContext = createContext();

export const ImageDictionary = (props) => {
  if (ImageContext === undefined) {
    throw new Error("please check");
  }

  const weather = useContext(WeatherContext);
  

  return (
    <ImageContext.Provider value={{ alt: "hello", src: "./assets/bg1.png" }}>
      {props.children}
    </ImageContext.Provider>
  );
};
