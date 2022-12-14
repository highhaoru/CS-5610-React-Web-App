import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteReviewThunk} from "../services/review-thunks";
import {useNavigate} from "react-router-dom";

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
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const deleteReviewHandler = (id) => {
        dispatch(deleteReviewThunk(id));
    }
    const publicProfileHandler = (uid) => {
        navigate('/profile/'+`${uid}`)
    }
    return(

        <li className="list-group-item">
            <div className="d-flex flex-row justify-content-between">
                <div className="d-flex flex-row justify-content-start">
                    <a href="" className="d-flex"
                       onClick={() => publicProfileHandler(post.uid)}
                    >{post.userName}</a>
                    <div className="d-flex ms-2">{post.stars} Stars</div>
                    <div className="d-flex ms-2">posted at {post.time}</div>
                </div>
                {
                    currentUser&& currentUser.role !== "NORMAL" &&
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteReviewHandler(post._id)}></i>
                }

            </div>
            <div className="mt-2">
                <p>{post.content}</p>
            </div>
        </li>
    );
};
export default ReviewItem;