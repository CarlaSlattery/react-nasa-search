import "../styles/search-results.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>No results</p>;
  }
  return (
    <div className="image-container">
      {results.map((image) => (
        <img className="card-image" src={image} alt="space" />
      ))}
    </div>
  );
};

export default SearchResults;
