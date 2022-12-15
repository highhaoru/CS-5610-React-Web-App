import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {createHistory} from "../services/history-service";
import {createHistoryThunk} from "../services/history-thunks";



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
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const templateHistory = {
        ...game,
        "uid" : currentUser ? currentUser._id: "",
        "gid" : game.imdbID,
        "Viewed": Date.now()
    }
    const detailHandler = () =>{
        if (currentUser){
            dispatch(createHistoryThunk(templateHistory));
        }
        navigate('/search/'+ game.imdbID, {state: game});
    }
    return (
        <li className="d-flex flex-column m-4 d-inline" style={{maxWidth:180}}
            onClick={detailHandler}>
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
export default GameCard;