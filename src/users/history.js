import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findUserByIdThunk} from "../services/users-thunks";
import {findJoinedThunk} from "../services/group-thunks";
import {findRecentReviewsThunk} from "../services/review-thunks";
import {findHistoryByIdThunk} from "../services/history-thunks";
import HistoryCard from "./history-card";
import HomeHistoryCard from "../home/home-history-card";

const HistoryComponent = ({uid}) => {
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
            <div className="list-group d-flex flex-row flex-wrap">
                {
                    history && history.map((post) =>
                        // <li>{history.Card}</li>
                        <HistoryCard history= {post}/>

                    )
                }
            </div>
        </>
    )
}
export default HistoryComponent