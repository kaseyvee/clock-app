import { useState, useEffect } from "react";
import Moment from "react-moment";
import { useMediaQuery } from "react-responsive";

function Time({ time }) {
  const [day, setDay] = useState(false);
  const [greeting, setGreeting] = useState("");

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  useEffect(() => {
    getGreeting();
  }, [])

  function getGreeting() {
    let hour = Number(time?.datetime[11]) + Number(time?.datetime[12]);

    if (hour >= 18 || hour <= 5) {
      setDay(false);
      return setGreeting("GOOD EVENING");
    }
    else if (hour >= 12) return setGreeting("GOOD AFTERNOON");
    else if (hour >= 0){
      setDay(true);
      return setGreeting("GOOD MORNING");
    }
  }

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