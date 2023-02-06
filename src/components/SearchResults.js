import "../styles/search-results.css";

const SearchResults = ({ results, loading }) => {
  if (!results.length && !loading) {
    return <p>No results</p>;
  }
  return (
    <div className="image-container">
      {results.map((image) => (
        <img className="card-image" key={image} src={image} alt="space" />
      ))}
    </div>
  );
};

export default SearchResults;
