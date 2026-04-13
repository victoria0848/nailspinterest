import { useState } from "react";

export default function SearchBar({ onSearch }: any) {
  const [query, setQuery] = useState("");

  return (
    <div>
      <input
        placeholder="Søg nail design..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => onSearch(query)}>Søg</button>
    </div>
  );
}