// import { useFetchData } from "../useFetchData"

function Quote({ quote }) {
  
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

      <button aria-label="Refresh for new quote">
        <img src="desktop/icon-refresh.svg" alt="" />
      </button>
    </div>
  );
}

export default Quote;