import { ReactComponent as StarFull } from 'assets/img/fullStar.svg';
import { ReactComponent as StarHalf } from 'assets/img/halfStar.svg';
import { ReactComponent as StarEmpty } from 'assets/img/emptyStar.svg';
import './styles.css'

function MovieStars(){

    return(
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>

    );
}
export default MovieStars;