import {useSelector} from "react-redux";
import {getUserName, isLoggedIn} from "./selectors";
import GameComponent from "./home-component";
import SearchBar from "../igdb/searchBar";
// import * as movieServices from "../../services/movieServices";

const Home = () => {
    const loggedIn = useSelector(isLoggedIn);
    const username = useSelector(getUserName);
    return (
        <div className="">
            {loggedIn && `Show content for a logged-in user: ${username}`}
            {!loggedIn &&
             <>
                 <SearchBar/>

                 <h1>Popular Games</h1>
                 <GameComponent/>
                 <h1>Recent Review</h1>
                 <GameComponent/>
                 {/*<SearchBar/>*/}
                 <h1>Top Rated</h1>
                 {/*<SearchBar/>*/}
                 <GameComponent/>

             </>
            }
        </div>
    )
};
export default Home;