import Moment from "react-moment";

function Time({ time }) {

  function getGreeting() {
    let number = Number(time?.datetime[11]) + Number(time?.datetime[12]);

    if (number >= 18) return "GOOD EVENING";
    else if (number >= 12) return "GOOD AFTERNOON";
    else return "GOOD MORNING";
  }

  return (
    <div className="time">
      <div className="time_greeting">
        <img src="desktop/icon-sun.svg" alt="" />
        <span className="text_greeting">
          {getGreeting()}
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