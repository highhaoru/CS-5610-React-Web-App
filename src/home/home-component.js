import {useDispatch, useSelector} from "react-redux";
import React from "react";
import GamePopularCard from "./home-card";


function GameListComponent() {
    const {games, loading} = useSelector((state) => state.igdb)
    return(
        <div className="d-flex flex-row">
            {/*{*/}
            {/*    !loading &&*/}
            {/*    <li className="list-group-item">*/}
            {/*        Loading...*/}
            {/*    </li>*/}
            {/*}*/}
            {
                !games &&
                <div>
                    No results, please enter a name
                </div>
            }
            {
                games && games.map((game) =>
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

export default GameListComponent;