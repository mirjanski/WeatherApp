const NoResultsDiv = () => {
  return (
    <div className="no-results">
        <img src="icons/no-result.svg" alt = "No results found" className="icon" />
        <h3 className="title">Something went wrong.</h3>
        <p className="message">Please try searching for another location.</p>
    </div>
  )
};

export default NoResultsDiv