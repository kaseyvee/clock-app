function Quote() {
  return (
    <div className="quote">
      <div className="quote_main">
        <p className="text_quote">
          “The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”
        </p>
        <span className="text_quote-author">
          Ada Lovelace
        </span>
      </div>

      <button aria-label="refresh for new quote">
        <img src="desktop/icon-refresh.svg" alt="" />
      </button>
    </div>
  );
}

export default Quote;