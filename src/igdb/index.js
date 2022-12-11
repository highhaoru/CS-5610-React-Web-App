import SearchBar from "./searchBar";
import GameCard from "./igdb-card";
import React from "react";
import {useDispatch, useSelector} from "react-redux";

function SearchComponent() {
    const {games, loading} = useSelector((state) => state.igdb)
    const dispatch = useDispatch()

    return(
        <div className="container">
            <h2>Search</h2>
            <SearchBar/>

            {
                !loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                !games &&
                <div>
                    No results, please enter a name
                </div>
            }
            {
                games && games.map((game) =>
                    <GameCard key={game.imdbID} game={game}/>
                    // <li key={game.imdbID} className="list-group-item">
                    //     {game.Title}
                    //     <img src={game.Poster}></img>
                    // </li>
                )
            }




        </div>
    );
}
export default SearchComponent;