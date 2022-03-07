import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";

function Listing() {
  return (
    <>
      <Pagination></Pagination>

      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-lx-3">
            <MovieCard></MovieCard>
          </div>
          <div className="col-sm-6 col-lg-4 col-lx-3">
            <MovieCard></MovieCard>
          </div>
          <div className="col-sm-6 col-lg-4 col-lx-3">
            <MovieCard></MovieCard>
          </div>
        </div>
      </div>
    </>
  );
}
export default Listing;
