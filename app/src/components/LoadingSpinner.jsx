const LoadingSpinner = () => {
  return (
    <>
      <center className="loader">
        <div className="spinner-grow text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </center>
      ;
    </>
  );
};

export default LoadingSpinner;
