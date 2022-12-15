import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import GamePopularCard from "./home-card";
import {findGameBySearchTermThunk, findGameRandomThunk} from "../services/igdb-thunks";


function RecommendGames() {
    const {random, loading} = useSelector((state) => state.igdb)
    const [searchTerm, setSearchTerm] = useState('call')
    const dispatch = useDispatch()
    const table = ['war', 'new', 'star', 'call', 'sword', 'grand', 'dark', 'magic', 'dragon']
    let toSearch = Math.floor(Math.random() * 9)
    useEffect(() => {
        dispatch(findGameRandomThunk(searchTerm))
    }, [toSearch])
    return(
        <>
            <button className="btn btn-primary p-2" onClick={(e)=>{
                toSearch = Math.floor(Math.random() * 7)
                setSearchTerm(table[toSearch])
                console.log(table[toSearch])
            }}>For a change </button>

            <div className="d-flex  d-xxl-none flex-row justify-content-start ">
                {
                    random && random.slice(0,4).map((game) =>
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
                    random && random.slice(0,10).map((game) =>
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

export default RecommendGames;