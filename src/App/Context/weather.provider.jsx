import React, { createContext } from "react";

export const WeatherContext = createContext();

export const Weather = (props) => {
  
  if(WeatherContext === undefined){
    throw new Error("please check");
  }

  return (
    <WeatherContext.Provider value={{description:"rain on japan road to mt. fuji"}}>
      {props.children}
    </WeatherContext.Provider>
  );
};