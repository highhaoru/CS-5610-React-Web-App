import {useParams} from "react-router";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {findUserByIdThunk} from "../services/users-thunks";
import {findJoinedThunk} from "../services/group-thunks";
import JoinedGroups from "./joined-groups";



const PublicProfile = () => {
    const {uid} = useParams()
    const {publicProfile} = useSelector((state) => state.users)
    console.log(uid)
    return(
        <>

            <h1>{publicProfile && publicProfile.username}'s profile</h1>
            <JoinedGroups uid={uid}/>
        </>
    )
}

export default PublicProfile