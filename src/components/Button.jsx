function Button() {
  return (
    <div className="button text_button">
      MORE
      <button aria-label="see more details" aria-expanded="false">
        <img src="desktop/icon-arrow-down.svg" alt="" />
      </button>
    </div>
  );
}

export default Button;