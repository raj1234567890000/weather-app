'use client'



import { useState } from "react";

export default function Home() {
const [location,setlocation]=useState("")
const [weather,setWeather]=useState('')

const getwheather=async()=>{
  const api_key="49a7dadaeb8a4c5390f173412243105"
  const api_url="http://api.weatherapi.com/v1//current.json?key="+api_key+"&q="+location
  if(location){
    try{
const res= await fetch(api_url)
const data=await res.json()
if(data){
  console.log(data)
  const api_data={
    country:data.location.country,
    city:data.location.name,
    temp:data.current.temp_c,
    humidity:data.current.humidity,
    wind:data.current.wind_mph,
    gust:data.current.gust_mph,
    visibility:data.current.vis_miles,
    condition:data.current.condition.text,
    img:data.current.condition.icon
  }
setWeather(<> <div className="text-center text-2xl p-2">{api_data.city}</div>
      <div className="flex justify-center">
        <div className="flow-root">
          <div className="float-left">
        
          </div>
        
          <div className="float-left text-6xl degress">{api_data.temp}</div>
        </div>
       
      </div>
      
      <div className="text-center text-white-500">{api_data.condition}</div>
      <div className="flow-root p-2 ">
        <div className="float-left text-white-500 mb-4">Humidity : {api_data.humidity} : %</div>
        <div className="float-right text-white-500 mb-4">wind : {api_data.wind} : mph</div>
        <div className="float-left text-white-500">Visibility:{api_data.visibility} : mph</div>
        <div className="float-right text-white-500">Gust : {api_data.gust} : mph</div>
      </div>
</>)  
}

    }catch(error){
      console.log(error)
    }
  }else{
  
  }
}


  return (
<>
<nav className="flex items-center justify-center py-4 bg-gray-700 w-full m-0 opacity-90 nav">
  <div className="relative">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/add.png" alt="add"/>
    </div>
    <input className="block bg-slat-800 text-black rounded-lg opacity-70 pl-10 p-3"
    type="text" id="location" placeholder="Locatons(ie.noida)" value={location}
    onChange={(e)=>setlocation(e.target.value)}
    />

  </div>
  <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold m-2 p-2.5 rounded-lg"
  id="search" onClick={getwheather}
  >
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
<path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
</svg>
<span className="sr-only">search</span>
  </button>

</nav>
{weather &&
<div className="flex w-full p-20 justify-center">
  <div className="w-full max-w-xs">
    <div className="mb-4">
      <div className="bg-red-600 shadow-lg rounded-3xl px-8 pt-6 pb-8 mb-4 opacity-80 text-white weather ">
        {weather}
   </div>
   </div>
   </div>
   </div>
   }
</>

  );
  
}

