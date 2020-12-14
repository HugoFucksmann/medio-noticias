//http://api.openweathermap.org/data/2.5/weather?lat=-31.6333&lon=-60.7&appid=a1cad7375df343ae073262a6ba4db56f&lang=es&units=metric

import Axios from "axios";

const getWeather = async () => {

   return await Axios.get(
     "http://api.openweathermap.org/data/2.5/weather?lat=-31.6333&lon=-60.7&appid=a1cad7375df343ae073262a6ba4db56f&lang=es&units=metric"
   )
     .then((res) => res.data.main)
     .catch((err) => console.log(err));
}

export default getWeather;