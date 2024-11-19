import { useState } from "react";
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error("Field is empty!");
      return;
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
          autoComplete="off"
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
