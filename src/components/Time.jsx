import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Moment from "react-moment";

function Time({ time, day }) {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    getGreeting();
  }, [])

  function getGreeting() {
    let hour = Number(time?.datetime[11]) + Number(time?.datetime[12]);

    if (hour >= 18 || hour <= 5) return setGreeting("GOOD EVENING");
    else if (hour >= 12) return setGreeting("GOOD AFTERNOON");
    else if (hour >= 0) return setGreeting("GOOD MORNING");
  }

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  return (
    <div className="time">
      <div className="time_greeting">
        <img src={`desktop/icon-${day ? "sun" : "moon"}.svg`} alt="" />
        <span className="text_greeting">
          {greeting + (isMobile ? "" : ", IT'S CURRENTLY")}
        </span>
      </div>

      <div className="time_current-time">
        <h1>
          <Moment format="hh:mm">{time?.datetime}</Moment>
        </h1>

        <span className="text_timezone">
          {time?.abbreviation}
        </span>
      </div>

      <h2>IN LONDON, UK</h2>
    </div>
  );
}

export default Time;