function Time() {
  return (
    <div className="time">
      <div className="time_greeting">
        <img src="desktop/icon-sun.svg" alt="" />
        <span className="text_greeting">
          GOOD MORNING
        </span>
      </div>

      <div className="time_current-time">
        <h1>
          11:37
        </h1>

        <span className="text_timezone">
          BST
        </span>
      </div>

      <h2>IN LONDON, UK</h2>
    </div>
  );
}

export default Time;