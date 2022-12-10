import React from "react";
import {useDispatch} from "react-redux";


const GameCard = (
    {
        game = {
            "Title": "Halo",
            "Year": "2022–",
            "imdbID": "tt2934286",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYmY5YmJiM2QtNjdhOC00NjRhLTgyNDEtYmM1NmJhNjc5NDE2XkEyXkFqcGdeQXVyMjQ4ODcxNTM@._V1_SX300.jpg"
        }
    }
) =>{
    return (
        <li className="row mt-4">
            <div className="col-2"></div>
            <div className="col-2">
                <img src={`${game.Poster}`} style={{height:240,width:180}}/>
            </div>

            <div className="col-8 col">
                <h4>{game.Title}</h4>
                {game.Year}
            </div>
        </li>
    );
};
export default GameCard;