import { motion } from "framer-motion";
import { useState } from "react";

function Loading({ loading }) {
  const [display, setDisplay] = useState(true);

  const animationDuration = 1;

  if (!loading) {
    setTimeout(() => {
      setDisplay(false);
    }, animationDuration * 1200)
  }

  return (
    <motion.div
      className="loading"
      animate={!loading && { opacity: [1, 0] }}
      transition={{ duration: animationDuration }}
      style={{ display: display ? "flex" : "none"}}
    >
      <motion.img
        src="desktop/icon-sun.svg"
        alt="loading icon"
        animate={{
          scale: [2, 3, 2],
          rotate: [0, 120, 240]
        }}
        transition={{ repeat: Infinity }}
      />
    </motion.div>
  );
}

export default Loading;