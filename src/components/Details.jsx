import { useContext } from "react";
import { motion } from "framer-motion";

import { DataContext } from "../helpers/dataContext";

function Details({ openDetails }) {
  const data = useContext(DataContext);

  return (
    <motion.div
      aria-hidden={openDetails ? "false" : "true"}
      className="details"
      style={{
        backgroundColor: `${!!data.day ? "hsla(0, 0%, 100%, 0.75)" : "hsla(0, 0%, 0%, 0.75)"}`,
        color: `${data.day ? "hsl(0, 0%, 19%)" : "hsl(0, 0%, 100%)"}`
      }}
      animate={{
        y: openDetails ? [400, 0] : [0, 400],
        opacity: openDetails ? [0, 1] : [1, 0]
      }}
    >
      <div className="details_container">
        <div className="details_container_item">
          <h3>
            CURRENT TIMEZONE
          </h3>

          <span className="text_info">
            {data.time?.timezone}
          </span>
        </div>

        <div className="details_container_item">
          <h3>
            DAY OF THE YEAR
          </h3>

          <span className="text_info">
            {data.time?.day_of_year}
          </span>
        </div>

        <div className="details_container_item">
          <h3>
            DAY OF THE WEEK
          </h3>

          <span className="text_info">
            {data.time?.day_of_week}
          </span>
        </div>

        <div className="details_container_item">
          <h3>
            WEEK NUMBER
          </h3>

          <span className="text_info">
            {data.time?.week_number}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default Details;