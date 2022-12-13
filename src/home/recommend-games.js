import {useDispatch, useSelector} from "react-redux";
import React from "react";
import GamePopularCard from "./home-card";


function RecommendGames() {
    const {games, loading} = useSelector((state) => state.igdb)
    return(
        <div className="d-flex flex-row justify-content-start">
            {
                games && games.slice(0,7).map((game) =>
                                       <GamePopularCard key={game.imdbID} game={game}/>
                                   // <li key={game.imdbID} className="list-group-item">
                                   //     {game.Title}
                                   //     <img src={game.Poster}></img>
                                   // </li>
                      )
            }



        </div>
    );
}

export default RecommendGames;