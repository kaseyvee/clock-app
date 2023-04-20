import { motion } from "framer-motion";

function Loading({ loading }) {
  return (
    <motion.div
      className="loading"
      animate={!loading && { opacity: [1, 0] }}
      transition={{ duration: 1 }}
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