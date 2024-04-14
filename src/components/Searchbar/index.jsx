import './assets/index.scss'

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const { search } = event.target.elements;

    onSubmit(search.value);
  };

  return (
    <header className="searchbar">
      <form className="searchbar__form" onSubmit={handleSubmit}>
        <button type="submit" className="searchbar__form-button">
          <span className="searchbar__form-button-label">Search</span>
        </button>

        <input
          className="searchbar__form-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
      </form>
    </header>
  );
};
