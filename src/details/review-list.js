import React from "react";
import {useSelector} from "react-redux";
import ReviewItem from "./review-item";

const ReviewList = () => {
    const {reviews, loading} = useSelector(state => state.reviews)
    // console.log(reviews)
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
                <ul className="list-group">
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