import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {findUserByIdThunk} from "../services/users-thunks";
import {findJoinedThunk} from "../services/group-thunks";
import {findRecentReviewsThunk} from "../services/review-thunks";
import {findHistoryByIdThunk} from "../services/history-thunks";
import HomeHistoryCard from "./home-history-card";
import GamePopularCard from "./home-card";

const HomeHistoryComponent = ({uid}) => {
    const dispatch = useDispatch()
    const {history} = useSelector((state) => state.history)
    useEffect(() => {
        dispatch(findUserByIdThunk(uid))
        dispatch(findHistoryByIdThunk(uid))
    }, [])
    console.log(history)
    return (
        <>
            <h2>Recent Viewed</h2>
            <div className="d-flex  d-xxl-none flex-row justify-content-start ">
                {
                    history && history.slice(0,4).map((post) =>
                        // <li>{history.Card}</li>
                        <HomeHistoryCard history= {post}/>

                    )
                }
            </div>
            <div className="d-none d-xxl-flex flex-row justify-content-start">
                {
                    history && history.slice(0,10).map((post) =>
                        // <li>{history.Card}</li>
                        <HomeHistoryCard history= {post}/>

                    )
                }
            </div>
        </>
    )
}
export default HomeHistoryComponent