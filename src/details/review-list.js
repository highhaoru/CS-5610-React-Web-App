import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ReviewItem from "./review-item";
import {findReviewsThunk} from "../services/review-thunks";

const ReviewList = ({gid}) => {
    const {reviews, loading} = useSelector(state => state.reviews)
    // console.log(reviews)
    // console.log({gid})
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findReviewsThunk(gid))
    }, [])

    return(
        <>
            <h4>Top reviews</h4>
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                <ul className="list-group mt-3">
                    {
                        reviews.map(post =>
                            <ReviewItem
                                key={post._id} post={post}/> )
                    }
                </ul>
            }
        </>

    );
};
export default ReviewList;