import React from "react";
import {useParams, useLocation} from "react-router-dom";

import NewReview from "./new-review";
import ReviewList from "./review-list";
import {useDispatch} from "react-redux";
import {joinGroupThunk} from "../services/group-thunks";

function DetailComponent() {
    const params = useParams();
    const location = useLocation();
    // console.log(location)
    const gameId = params.gid;
    const game = location.state;
    const curUser = "user1";
    const dispatch = useDispatch();
    const joinGroupHandler = () => {
        dispatch(joinGroupThunk({user: curUser, game:gameId}));
    }
    return(
        <div className="container">
            <h2 className="mt-2 mb-2">Detail</h2>
            <div className="d-flex flex-row justify-content-evenly">
                <div>
                    <img src={`${game.Poster}`}/>
                </div>
                <div className="align-self-center ">
                    <h2>{game.Title}</h2>
                    <div>Release year: {game.Year}</div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={joinGroupHandler}>
                        Join Fans Group of {game.Title}
                    </button>
                </div>
                <div></div>
            </div>
            <NewReview gid={gameId}/>
            <ReviewList gid={gameId}/>
        </div>
    );
}
export default DetailComponent;
