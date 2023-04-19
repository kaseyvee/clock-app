import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
 
function Quote({ quote, setRefresh, refresh }) {
  const [newQuote, setNewQuote] = useState("");

  useEffect(() => {
    setNewQuote(quote);
    setNewQuote("");
  }, [quote])
  
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
        animate={newQuote && { rotate: 360 }}
        transition={{ duration: Infinity }}
      >
        <img src="desktop/icon-refresh.svg" alt="" />
      </motion.button>
    </div>
  );
}

export default Quote;