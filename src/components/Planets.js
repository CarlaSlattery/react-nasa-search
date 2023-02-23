import React, { useState } from "react";

import Search from "./Search.js";

import SearchResults from "./SearchResults.js";

const Planets = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  searchResults.map((e) => console.log(e));
  return (
    <div className="app">
      <Search setSearchResults={setSearchResults} setLoading={setLoading} />
      <SearchResults results={searchResults} loading={loading} />
    </div>
  );
};

export default Planets;
