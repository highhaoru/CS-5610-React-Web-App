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
                games && games.map((game) =>
                    <GameCard key={game.imdbID} game={game}/>
                    // <li key={game.imdbID} className="list-group-item">
                    //     {game.Title}
                    //     <img src={game.Poster}></img>
                    // </li>
                )
            }
            {/*{*/}
            {/*    <ul className="list-group">*/}
            {/*        {*/}
            {/*            games.map(post =>*/}
            {/*                <GameCard*/}
            {/*                    key={post.imdbID} post={post}/> )*/}
            {/*        }*/}
            {/*    </ul>*/}
            {/*}*/}

        </div>
    );
}
export default SearchComponent;