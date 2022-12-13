import {useSelector} from "react-redux";
import {getUserName, isLoggedIn} from "./selectors";
import GameComponent from "./home-component";
import SearchBar from "../igdb/searchBar";
import RecentReviews from "./recent-reviews";
// import * as movieServices from "../../services/movieServices";

const Home = () => {
    const {currentUser} = useSelector((state) => state.users)
    return (

        <div className="">
            <img className="w-100" src="/images/meta-gs.png"></img>
            <SearchBar/>
            <RecentReviews/>
            {
                currentUser &&
                <h1>Welcome, {currentUser.username}!</h1>
            }
            {
                currentUser &&
                 <>
                     <h2>Popular Games</h2>
                     <GameComponent/>
                     <h2>Recent Review</h2>
                     <GameComponent/>
                     {/*<SearchBar/>*/}
                     <h2>Top Rated</h2>
                     {/*<SearchBar/>*/}
                     <GameComponent/>
                 </>
            }
        </div>
    )
};
export default Home;