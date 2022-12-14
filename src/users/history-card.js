import React from "react";
import {useNavigate} from "react-router-dom";


const GamePopularCard = (
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
    const navigate = useNavigate();

    return (
        <li className="d-flex flex-column m-4 d-inline" style={{maxWidth:180}} onClick={(e)=>{
            navigate('/search/'+ game.imdbID, {state: game})
        }}>
            <div className="">
                <img src={`${game.Poster}`} style={{height:240,width:180}}/>
            </div>

            <div className="">
                <h4>{game.Title}</h4>
                {game.Year}
            </div>
        </li>
    );
};
export default GamePopularCard;