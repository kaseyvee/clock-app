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
    // return axios.get("https://api.ipbase.com/v2/info?apikey=A3Lndr4B4W6ZXlmL40vD5wWl6dxLf7sOwxht9LzG&ip=1.1.1.1");
  }
  
  function getQuote() {
    return axios.get("https://api.quotable.io/random")
  }

  useEffect(() => {
    Promise.all([getTime(), getPlace(), getQuote()])
      .then((results) => {
        const time = results[0].data;
        // const place = results[1].data.data.location;
        const quote = results[2].data;
        
        // Sees if daylight is out
        const hour = parseTime(time, 11, 12);
        let day = null;
        if (hour >= 18 || hour <= 5) day = false;
        else day = true;

        setState({
          time,
          // place,
          quote,
          day,
          refresh,
          setRefresh
        });

        // Rerenders every new minute
        const seconds = parseTime(time, 17, 18)
        const timeout = 60000 - (1000 * seconds);

        setTimeout(() => {
          setRefresh(!refresh);
        }, timeout)
      })
      .catch((err) => err)
  }, [refresh])

  return state;
}