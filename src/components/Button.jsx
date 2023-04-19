import { motion } from "framer-motion";

function Button({ onClick, openDetails }) {
  return (
    <button
      className="button text_button"
      aria-label={`see ${openDetails ? "less" : "more"} details`}
      aria-expanded={openDetails ? "true" : "false"}
      onClick={onClick}
    >
      <span>{openDetails ? "LESS" : "MORE"}</span>
      <motion.div
        animate={{ rotate: openDetails ? 180 : 0 }}
        className="button_arrow"
      >
        <img
          src="desktop/icon-arrow-down.svg"
          alt=""
        />
      </motion.div>
    </button>
  );
}

export default Button;