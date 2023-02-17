import "../styles/app.css";
import "../styles/search.css";
import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import logo from "../assets/logo.png";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  searchResults.map((e) => console.log(e));
  return (
    <div className="app">
      <img className="nasa-logo" src={logo} alt="nasaLogo" />
      <Search setSearchResults={setSearchResults} setLoading={setLoading} />
      <SearchResults results={searchResults} loading={loading} />
    </div>
  );
};

export default App;
