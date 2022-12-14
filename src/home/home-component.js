import {useDispatch, useSelector} from "react-redux";
import React from "react";
import GamePopularCard from "./home-card";


function GameListComponent() {
    const {games, loading} = useSelector((state) => state.igdb)
    return(
        <>
            <div className="d-flex  d-xxl-none flex-row justify-content-start ">
                {
                    games && games.slice(0,5).map((game) =>
                            <GamePopularCard key={game.imdbID} game={game}/>
                        // <li key={game.imdbID} className="list-group-item">
                        //     {game.Title}
                        //     <img src={game.Poster}></img>
                        // </li>
                    )
                }
            </div>
            <div className="d-none d-xxl-flex flex-row justify-content-start">
                {
                    games && games.slice(0,10).map((game) =>
                            <GamePopularCard key={game.imdbID} game={game}/>
                        // <li key={game.imdbID} className="list-group-item">
                        //     {game.Title}
                        //     <img src={game.Poster}></img>
                        // </li>
                    )
                }
            </div>
        </>


    );
}

export default GameListComponent;