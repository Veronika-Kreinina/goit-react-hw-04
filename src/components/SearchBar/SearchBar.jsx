import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      return alert("Field is empty!");
    }
    onSubmit(query);
    setQuery("");
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="query"
          type="text"
          autoFocus
          placeholder="Search images and photos"
          value={query}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
