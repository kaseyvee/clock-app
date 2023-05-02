import { useState, useEffect } from "react";
import axios from "axios"
import { parseTime } from "./parseTime";

export const useFetchData = () => {
  const [state, setState] = useState({});
  const [refresh, setRefresh] = useState(false);

  function getTime() {
    return axios.get("https://worldtimeapi.org/api/ip");
  }
  
  function getPlace() {
    return axios.get("https://api.ipbase.com/v2/info?apikey=ofX1D9eD4EgckLoeVtQClqd6nbY5cMgIoWy4F8iM&language=en&ip=1.1.1.1");
  }
  
  function getQuote() {
    return axios.get("https://api.quotable.io/random")
  }

  useEffect(() => {
    let timeoutId;

    Promise.all([getTime(), getPlace(), getQuote()])
      .then((results) => {
        const time = results[0].data;
        const place = results[1].data.data.location;
        console.log(place)
        const quote = results[2].data;
        
        // Sees if daylight is out
        const hour = parseTime(time, 11, 12);
        let day = null;
        if (hour >= 18 || hour <= 5) day = false;
        else day = true;

        setState({
          time,
          place,
          quote,
          day,
          refresh,
          setRefresh
        });

        // Rerenders every new minute
        const seconds = parseTime(time, 17, 18)
        const timeout = 60000 - (1000 * seconds);

        timeoutId = setTimeout(() => {
          setRefresh(!refresh);
        }, timeout)
      })
      .catch((err) => err)
      
    return () => clearTimeout(timeoutId);
  }, [refresh])

  return state;
}