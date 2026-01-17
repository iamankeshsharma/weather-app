import { useEffect, useState } from "react";

const useStorage = (k, v) => {
  if (!k) {
    throw new Error(`Provide key(k)`);
  }

  //   Lazy Initialization
  const [value, setValue] = useState(()=>{
    try{
        const stored = localStorage.getItem(k);
        return stored ? JSON.parse(stored):v
    }catch (error){
        console.error(`Unable to parse`);
        return v;
    }
  });

//   sync value
  useEffect(()=>{
    localStorage.setItem(k, JSON.stringify(value))
  },[k, value]);
  return [value, setValue];
};

export default useStorage;
