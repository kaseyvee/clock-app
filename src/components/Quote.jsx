import { motion } from "framer-motion";
 
function Quote({ quote, setRefresh, refresh }) {
  
  return (
    <div className="quote">
      <div aria-label="Random quote" className="quote_main">
        <p className="text_quote">
          {quote?.content}
        </p>
        <span className="text_quote-author">
          {quote?.author}
        </span>
      </div>

      <motion.button
        aria-label="Refresh for new quote"
        onClick={() => setRefresh(!refresh)}
        whileTap={{ rotate: 360 }}
      >
        <img src="desktop/icon-refresh.svg" alt="" />
      </motion.button>
    </div>
  );
}

export default Quote;