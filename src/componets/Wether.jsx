import React, { useEffect,useRef } from 'react'
import '../componets/Wether.css'
import sarch_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import dizzle_icon from '../assets/drizzle.png'
import cloud_icon from '../assets/cloud.png'
import humidity from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import { ToastContainer,toast } from 'react-toastify'


const Wether = () => {
  const inputRef = useRef();
  const [wetherData,setWetherData] = React.useState(false);
  const allIcons = {
    "01d":clear_icon,
    "01n":clear_icon,
    "02d":cloud_icon,
    "02n":clear_icon,
    "03d":clear_icon,
    "04d":dizzle_icon,
    "04n":dizzle_icon,
    "09d":rain_icon,
    "09n":rain_icon,
    "10d":rain_icon,
    "10n":rain_icon,
    "13d":snow_icon,
    "13n":snow_icon,
  }

  const search = async (city) => {
    if(!city) {
        toast.error("Please enter a city name");
      console.log("Please enter a city name");
      return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`;
     try {
      const response = await fetch(url);
        if(response.status === 404) 
        {
          toast.error("City not found");
          console.log("City not found");
        }
      const data = await response.json();
      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setWetherData({
        humidity:data.main.humidity,
        city:data.name,
        windSpeed:data.wind.speed,
        temperature:Math.round(data.main.temp - 273.15),
        location:data.name,
        icon:icon,
      })
  
     }
     catch (error)
     {
        console.log(response,"This one is response");
       if(data && data.cod === "404") {
        toast.error("City not found");
    
        console.log("City not found");
      }
      console.error("Error fetching weather data:", error);
     }
  }

  

  useEffect(() => {
    search("London");
  }, [])
  return (
    <div className='wether'>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className='search-bar'>
        <input type="text" ref={inputRef} placeholder="Enter city name" />
        <img src={sarch_icon} alt="Search Icon" onClick={() => search(inputRef.current.value)} />
         </div>
           <img src={wetherData.icon} alt="Weather Icon" className='wether_icon' />
           <p className='temperature'>{wetherData.temperature}°C</p>
           <p className='location'>{wetherData.location}</p>
           <div className="wether-data">
            <div className="col">
              <img src={humidity} alt="" />
               <div>
                  <p>
                    {wetherData.humidity}%
                  </p>
                  <span>
                    Humidity
                  </span>
               </div>
            </div>

              <div className="col">
             
               <div>
                  <p>
                    {wetherData.windSpeed} km/h
                  </p>
                  <span>
                    wind speed
                  </span>
               </div>
            </div>
           </div>
    </div>
  )
}

export default Wether