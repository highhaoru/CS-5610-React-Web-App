import {useSelector} from "react-redux";
import {getUserName, isLoggedIn} from "./selectors";
// import MovieSection from "./MovieSection";
// import * as movieServices from "../../services/movieServices";

const HomeScreen = () => {
    const loggedIn = useSelector(isLoggedIn);
    const username = useSelector(getUserName);
    return (
        <div className={"col-12"}>
            {loggedIn && `Show content for a logged-in user: ${username}`}
            {!loggedIn &&
             <>
                 <h1>Popular Movies</h1>
                 {/*<MovieSection findMoviesFromServer={movieServices.findPopularMovies}/>*/}
                 <h1>Now Playing</h1>
                 {/*<MovieSection findMoviesFromServer={movieServices.findNowPlayingMovies}/>*/}
                 <h1>Top Rated</h1>
                 {/*<MovieSection findMoviesFromServer={movieServices.findTopRatedMovies}/>*/}
                 <h1>Upcoming</h1>
                 {/*<MovieSection findMoviesFromServer={movieServices.findUpcomingMovies}/>*/}
             </>
            }
        </div>
    )
};
export default HomeScreen;