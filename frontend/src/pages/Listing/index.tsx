import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";

function Listing() {

  //FORMA ERRADA
  axios.get(`${BASE_URL}/movies?size=12$page=0`).then(response => {
    console.log(response.data);
  });

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
