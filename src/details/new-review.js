import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createReviewThunk} from "../services/review-thunks";

const NewReview = ({gid}) => {
    let [curReview, setCurReview] = useState('');
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch();
    const user = {
        "userName": currentUser.username,
        "uid":currentUser._id,
    };

    const templateReview = {
        ...user,
        "gid": gid,
        "time": Date.now(),
        // "content": "The iconic Halo series received its latest entry in November 2021. Halo Infinite launched on Game" +
        //     " Pass and latched on to the modern trend of linear franchises releasing open-world adventures. As such, we've updated this list of the Halo games ranked, to include the latest release in the series, and to also expand on each pre-existing entry to give players a better idea of which Halo games they should play and which aren't worth their time. Each entry now details each game's release date, the platforms it can be played on, the main story completion time according to howlongtobeat.com, and the best feature.",
        "liked": false,
        "likes": 0,
        "stars": 3,
    }
    const reviewHandler = () => {
        const newReview = {
            ...templateReview,
            content: curReview,
            title: curReview
        }
        dispatch(createReviewThunk(newReview));
        // console.log(whatsHappening);
    }
    return(
        <div className="col-10 mt-5">
           <textarea value={curReview} placeholder="Write down your own review here!"
                     className="form-control border-0"
                     onChange={(event) => setCurReview(event.target.value)}>
           </textarea>
            <div>
                <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                        onClick={reviewHandler}>
                    Submit Review
                </button>
                <div className="text-primary fs-2">
                    <i className="bi bi-card-image me-3"></i>
                    <i className="bi bi-filetype-gif me-3"></i>
                    <i className="bi bi-bar-chart me-3"></i>
                    <i className="bi bi-emoji-smile me-3"></i>
                    <i className="bi bi-geo-alt"></i>
                </div>
            </div>
        </div>
    );
};
export default NewReview;