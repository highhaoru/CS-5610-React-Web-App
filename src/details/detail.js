import React from "react";
import {useParams, useLocation} from "react-router-dom";

import NewReview from "./new-review";
import ReviewList from "./review-list";



function DetailComponent() {
    const params = useParams();
    const location = useLocation();
    console.log(location)
    const gameId = params.gid;
    const game = location.state;

    return(
        <div className="container">
            <h2>Detail</h2>
            <img src={`${game.Poster}`}/>
            <div>Name: {game.Title}</div>
            <div>Release year{game.Year}</div>
            <NewReview gid={gameId}/>
            <ReviewList gid={gameId}/>
        </div>
    );
}
export default DetailComponent;