import {useParams} from "react-router";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {findUserByIdThunk} from "../services/users-thunks";
import {findJoinedThunk} from "../services/group-thunks";
import JoinedGroups from "./joined-groups";



const PublicProfile = () => {
    const {uid} = useParams()
    // const {publicProfile} = useSelector((state) => state.users)
    console.log(uid)
    return(
        <>
            <img className="w-100 " src="/images/banner.jpg" alt="banner"/>
            <img src="/images/hao.jpg" alt={"avatar"}
                 className="rounded-circle w-25 float-left ms-3 position-relative top-0 translate-middle-y"/>

            <div className="container">
                {/*<h1>{publicProfile && publicProfile.username}'s profile</h1>*/}
                <JoinedGroups uid={uid}/>
            </div>

        </>
    )
}

export default PublicProfile