import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findUserByIdThunk} from "../services/users-thunks";
import {findJoinedThunk} from "../services/group-thunks";
import {findRecentReviewsThunk} from "../services/review-thunks";
import {findHistoryByIdThunk} from "../services/history-thunks";
import HistoryCard from "./history-card";

const HistoryComponent = ({uid}) => {
    const dispatch = useDispatch()
    const {history} = useSelector((state) => state.history)
    useEffect(() => {
        dispatch(findUserByIdThunk(uid))
        dispatch(findHistoryByIdThunk(uid))
    }, [])
    return (
        <>
            <h2>Recent Viewed</h2>
            <div className="list-group">
                {
                    history && history.map((history) =>
                        // <li>{history.Card}</li>
                        <HistoryCard key={history.hID}/>
                    )
                }
            </div>
        </>
    )
}
export default HistoryComponent