import axios from "axios"
import { useState, useEffect } from "react";

export const useFetchData = () => {
  const [state, setState] = useState({
    // time: {
    //   abbreviation: "",
    //   datetime: "",
    //   timezone: "",
    //   day_of_week: null,
    //   day_of_year: null,
    //   week_number: null,
    // },
    // quote: {
    //   author: "",
    //   content: "",
    // }
  });

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
        setState({time, quote});
      })
      .catch((err) => console.log(err.message))
  }, [])

  return state;
}