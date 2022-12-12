import React from "react";
import {useDispatch} from "react-redux";
import {deleteReviewThunk} from "../services/review-thunks";

const ReviewItem = (
    {
        post = {
            "userName": "Sample User",
            "gid": "tt",
            "time": "2017-12-19",
            "content": "The iconic Halo series received its latest entry in November 2021. Halo Infinite launched on Game" +
                " Pass and latched on to the modern trend of linear franchises releasing open-world adventures. As such, we've updated this list of the Halo games ranked, to include the latest release in the series, and to also expand on each pre-existing entry to give players a better idea of which Halo games they should play and which aren't worth their time. Each entry now details each game's release date, the platforms it can be played on, the main story completion time according to howlongtobeat.com, and the best feature.",
            "liked": false,
            "likes": 0,
            "stars": 3,
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteReviewHandler = (id) => {
        dispatch(deleteReviewThunk(id));
    }

    return(

        <li className="list-group-item">
            <div className="row">
                <div>Username</div>
                <div> Stars</div>
                <div> time</div>
            </div>
            <div>
                <p>{post.content}</p>
            </div>
        </li>
    );
};
export default ReviewItem;