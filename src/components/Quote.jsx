import { useContext } from "react";
import { motion } from "framer-motion";

import { DataContext } from "../helpers/dataContext";

function Quote() {
  const data = useContext(DataContext);
  
  return (
    <div className="quote">
      <div aria-label="Random quote" className="quote_main">
        <p className="text_quote">
          {data.quote?.content}
        </p>
        <span className="text_quote-author">
          {data.quote?.author}
        </span>
      </div>

      <motion.button
        aria-label="Refresh for new quote"
        onClick={() => data.setRefresh(!data.refresh)}
        whileTap={{ rotate: 360 }}
      >
        <img src="desktop/icon-refresh.svg" alt="" />
      </motion.button>
    </div>
  );
}

export default Quote;