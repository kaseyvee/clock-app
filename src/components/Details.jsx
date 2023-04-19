import { motion } from "framer-motion";

function Details({ time, day, openDetails }) {
  return (
    <motion.div
      className="details"
      style={{
        backgroundColor: `${!!day ? "hsla(0, 0%, 100%, 0.75)" : "hsla(0, 0%, 0%, 0.75)"}`,
        color: `${day ? "hsl(0, 0%, 19%)" : "hsl(0, 0%, 100%)"}`
      }}
      animate={{
        y: openDetails ? [300, 0] : [0, 300],
        opacity: openDetails ? [0, 1] : [1, 0]
      }}
    >
      <div className="details_container">
        <div className="details_container_item">
          <h3>
            CURRENT TIMEZONE
          </h3>

          <span className="text_info">
            {time?.timezone}
          </span>
        </div>

        <div className="details_container_item">
          <h3>
            DAY OF THE YEAR
          </h3>

          <span className="text_info">
            {time?.day_of_year}
          </span>
        </div>

        <div className="details_container_item">
          <h3>
            DAY OF THE WEEK
          </h3>

          <span className="text_info">
            {time?.day_of_week}
          </span>
        </div>

        <div className="details_container_item">
          <h3>
            WEEK NUMBER
          </h3>

          <span className="text_info">
            {time?.week_number}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default Details;