import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [coordinates, setCoordinates] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [bgImage, setBgImage] = useState(null);
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCoordinates({ latitude:latitude, longitude:longitude });
    });
  },[])

  useEffect(() => {
    if(coordinates){
      const API_KEY = import.meta.env.VITE_OPEN_WEATHER_SECRET_KEY;
      const url = `${
        import.meta.env.VITE_OPEN_WEATHER_BASE_URL
      }weather?lat=${coordinates?.latitude}&lon=${coordinates?.longitude}&appid=${API_KEY}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {setWeatherData(data)})
        .catch((error) => console.error(error));
    }
  }, [coordinates]);

  useEffect(()=>{
    if(weatherData){
      const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
      const params = {
          query:`${weatherData?.weather[0]?.description}`,
          orientation:'landscape'
      };
      const url = `${import.meta.env.VITE_UNSPLASH_BASE_URL}search/photos?${(new URLSearchParams(params)).toString()}`
      
      fetch(url, {
        method: "GET",
        headers:{
          Authorization:`Client-ID ${UNSPLASH_ACCESS_KEY}`
        }
      }).then((response)=>response.json())
      .then((data)=>{console.log(data?.results[0]?.urls.full);setBgImage(data?.results[0]?.urls.full);})
      .catch((error)=>console.error(error));
    }
  },[weatherData]);

  return (
    <>
      {
        bgImage && 
        <div 
        style={{
          zIndex:'0',
          height:'100%',
          width:'100%',
          display:'flex',
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',
        }}
        >
          <div
          style={{
            position:'absolute',
          inset:0,
          display:'flex',
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'#00000029'
        }}
          >

          </div>
          <img
            src={bgImage}
            style={{
              width:'100%',
              height:'100%',
            }}
          />
        </div>
      }
      {coordinates && (
        <div
        style={{
          zIndex:'50',
          display:'flex',
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',
        }}
        >
          <h1>{coordinates.latitude}</h1>
          <h1>{coordinates.longitude}</h1>
          <h1>Weather</h1>
          <h3>
            {JSON.stringify(weatherData)}
          </h3>
        </div>
      )}
    </>
  );
}

export default App;
