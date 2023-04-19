import axios from "axios"
import { useState, useEffect } from "react";

export const useFetchData = () => {
  const [state, setState] = useState([]);
  const [refresh, setRefresh] = useState(false);

  function getTime() {
    return axios.get("http://worldtimeapi.org/api/ip");
  }
  
  function getPlace() {
    return axios.get("http://worldtimeapi.org/api/ip");
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
        setState([time, quote]);

        let seconds = Number(time?.datetime[17] + time?.datetime[18]);

        let timeout = 60000 - (1000 * seconds);
        console.log(timeout)

        setTimeout(() => {
          setRefresh(!refresh);
        }, timeout)
      })
      .catch((err) => console.log(err.message))
  }, [refresh])

  return state;
}