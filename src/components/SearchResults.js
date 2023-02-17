import "../styles/search-results.css";

const SearchResults = ({ results, loading }) => {
  if (!results.length && !loading) {
    return (
      <div className="message-container">
        <p className="search-message">No results</p>;
      </div>
    );
  }
  return (
    <div className="image-container">
      {results.slice(0, 12).map((image) => (
        <img className="card-image" key={image} src={image} alt="space" />
      ))}
    </div>
  );
};

export default SearchResults;
