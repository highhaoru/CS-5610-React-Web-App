import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import GamePopularCard from "./home-card";
import {findRecentReviewsThunk, findReviewsThunk} from "../services/review-thunks";
import ReviewItem from "../details/review-item";


function RecentReviews() {
    const {recents} = useSelector(state => state.home)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findRecentReviewsThunk())
    }, [])
    return(
        <div className="">
            <h2>Recent reviews</h2>
            {
                <ul className="list-group mt-3">
                    {
                        recents.map(post =>
                            <ReviewItem
                                key={post._id} post={post}/> )
                    }
                </ul>
            }
        </div>
    );
}

export default RecentReviews;