import {useSelector} from "react-redux";
import {getUserName, isLoggedIn} from "../redux/selectors";
import GameSection from "./gameSection";
import * as gameServices from "../services/games-service";

const Home = () => {
    const loggedIn = useSelector(isLoggedIn);
    const username = useSelector(getUserName);
    return (
        <div className={"w-100 row bg-dark m-0"}>
            {loggedIn && `Show content for a logged-in user: ${username}`}
            {!loggedIn &&
             <>
                 <h1>Popular Games</h1>
                 <GameSection findGamesFromServer={gameServices.findPopularGames}/>

                 <h1>Games Now Playing</h1>
                 <GameSection findGamesFromServer={gameServices.findNowPlayingGames}/>

                 <h1>Top Rated Games</h1>
                 <GameSection findGamesFromServer={gameServices.findTopRatedGames}/>

                 <h1>Upcoming Games</h1>
                 <GameSection findGamesFromServer={gameServices.findUpcomingGames}/>
             </>
            }
        </div>
    )
};
export default Home;