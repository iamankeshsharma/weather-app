import React, { createContext } from "react";

export const WeatherContext = createContext();

export const Weather = (props) => {
  
  if(WeatherContext === undefined){
    throw new Error("please check");
  }

  return (
    <WeatherContext.Provider value={{}}>
      {props.children}
    </WeatherContext.Provider>
  );
};