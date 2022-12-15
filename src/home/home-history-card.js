import React from "react";
import {useNavigate} from "react-router-dom";
import {deleteReviewThunk} from "../services/review-thunks";
import {useDispatch} from "react-redux";
import {deleteHistoryThunk} from "../services/history-thunks";


const HomeHistoryCard = (
    {
        history = {
            "Title": "Halo 3",
            "Year": "2027",
            "gid": "tt2934286",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYmY5YmJiM2QtNjdhOC00NjRhLTgyNDEtYmM1NmJhNjc5NDE2XkEyXkFqcGdeQXVyMjQ4ODcxNTM@._V1_SX300.jpg",
            "Viewed": "2019-02-02T00:00:00.000+00:00"
        }
    }
) =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const deleteHandler = (id) => {
        dispatch(deleteHistoryThunk(id));
    }
    return (
        <li className="d-flex flex-column m-4 d-inline" style={{maxWidth:180}} >
            <div className="">
                <img src={`${history.Poster}`} style={{height:240,width:180}}
                     onClick={(e)=>{
                         navigate('/search/'+ history.gid, {state: history})
                     }}/>
            </div>

            <div className="">
                <h4>{history.Title}</h4>
                {history.Year}
            </div>
        </li>
    );
};
export default HomeHistoryCard;