import React, {useEffect, useState} from "react";
import {useParams, useLocation, useNavigate} from "react-router-dom";
import LoginComponent from "../users/loginComponent";
import NewReview from "./new-review";
import ReviewList from "./review-list";
import {useDispatch, useSelector} from "react-redux";

import {checkJoinedThunk, joinGroupThunk} from "../services/group-thunks";
import {Navigate} from "react-router";


function DetailComponent() {
    const {joinedThis, joined} = useSelector(state => state.group)
    const {currentUser} = useSelector((state) => state.users)
    const params = useParams();
    const location = useLocation();
    const gameId = params.gid;
    const game = location.state;
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(checkJoinedThunk({uid: currentUser._id, gid:gameId.toString()}));
    }, [joined])


    // console.log(joinedThis)
    console.log(game.Title)
    const joinGroupHandler = () => {
        dispatch(joinGroupThunk(
            {
                uid: currentUser._id,
                gid:gameId.toString(),
                game:{name:game.Title.toString()}
            }));
    }
    if (!currentUser) {
        return (<Navigate to={'/login'}/>)
    }

    return(
        <div className="container">

            <div className="d-flex flex-row justify-content-evenly mt-3">
                <div>
                    <img src={`${game.Poster}`}/>
                </div>
                <div className="align-self-center ">
                    <h2>{game.Title}</h2>
                    <div>Release year: {game.Year}</div>
                    <button className={`${joinedThis? "d-none": ""}
                    rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold`}
                            onClick={joinGroupHandler}>
                        Join Fans Group of {game.Title}
                    </button>
                    <button className={`${joinedThis? "": "d-none"}
                    rounded-pill btn btn-disabled float-end mt-2 ps-3 pe-3 fw-bold`}>
                        Has Joined this Group
                        <i className="bi bi-check-lg align-self-center p-0 m-0"></i>
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
