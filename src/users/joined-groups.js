import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findUserByIdThunk} from "../services/users-thunks";
import {findJoinedThunk} from "../services/group-thunks";

const JoinedGroups = ({uid}) => {
    const dispatch = useDispatch()
    const {joined} = useSelector((state) => state.group)
    useEffect(() => {
        dispatch(findUserByIdThunk(uid))
        dispatch(findJoinedThunk(uid))
    }, [])
    return (
        <>
            <h2>Joined Groups</h2>
            <div className="list-group">
                {
                    joined && joined.map((group) =>
                        <li>{group.gameName}</li>
                    )
                }
            </div>
        </>
    )
}
export default JoinedGroups