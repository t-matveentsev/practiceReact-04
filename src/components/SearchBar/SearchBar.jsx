import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
      />
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
