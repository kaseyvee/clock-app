import { useState, useEffect, useContext } from "react";
import { useMediaQuery } from "react-responsive";
import Moment from "react-moment";

import { DataContext } from "../dataContext";

function Time() {
  const [greeting, setGreeting] = useState("");
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const data = useContext(DataContext);

  useEffect(() => {
    getGreeting();
  }, [])

  function getGreeting() {
    let hour = Number(data.time?.datetime[11]) + Number(data.time?.datetime[12]);

    if (hour >= 18 || hour <= 5) return setGreeting("GOOD EVENING");
    else if (hour >= 12) return setGreeting("GOOD AFTERNOON");
    else if (hour >= 0) return setGreeting("GOOD MORNING");
  }

  return (
    <div className="time">
      <div className="time_greeting">
        <img src={`desktop/icon-${data.day ? "sun" : "moon"}.svg`} alt="" />
        <span className="text_greeting">
          {greeting + (isMobile ? "" : ", IT'S CURRENTLY")}
        </span>
      </div>

      <div className="time_current-time">
        <h1>
          <Moment format="hh:mm">{data.time?.datetime}</Moment>
        </h1>

        <span className="text_timezone">
          {data.time?.abbreviation}
        </span>
      </div>

      {/* <h2>IN {place?.city.name.toUpperCase()}, {place?.country.name.toUpperCase()}</h2> */}
      <h2>IN VANCOUVER, CANADA</h2>
    </div>
  );
}

export default Time;