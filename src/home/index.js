import {useSelector} from "react-redux";
import {getUserName, isLoggedIn} from "./selectors";
import GameComponent from "./home-component";
import SearchBar from "../igdb/searchBar";
import RecentReviews from "./recent-reviews";
import HistoryComponent from "../users/history";
import React from "react";
// import * as movieServices from "../../services/movieServices";

const Home = () => {
    const {currentUser} = useSelector((state) => state.users)
    const uid = currentUser ? currentUser._id.toString() : ""
    return (

        <div className="">
            <img className="w-100" src="/images/meta-gs.png"></img>
            <div className="container-xxl">
                <SearchBar/>
                {
                    currentUser &&
                    <h1>Welcome, {currentUser.username}!</h1>
                }
                {
                    !currentUser &&
                    <h1>Welcome, Guest!</h1>
                }
                <RecentReviews/>
            </div>
            <div className="row">
                <div className="col-1 d-none d-xxl-block">
                </div>
                <div className="col-8">
                    <h2>Popular Games</h2>
                    <GameComponent/>
                    <h2>Top Rated</h2>
                    <GameComponent/>
                    {
                        currentUser &&
                        <HistoryComponent uid={uid}/>
                    }

                </div>
            </div>

        </div>
    )
};
export default Home;