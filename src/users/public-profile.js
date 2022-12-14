import {useParams} from "react-router";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {findUserByIdThunk} from "../services/users-thunks";
import {findJoinedThunk} from "../services/group-thunks";
import JoinedGroups from "./joined-groups";
import ProfileCard from "./profile-card";



const PublicProfile = () => {
    const {uid} = useParams()
    const {publicProfile} = useSelector((state) => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(findUserByIdThunk(uid))
        // dispatch(findReviewsByAuthorThunk(uid))
        // dispatch(findFollowersThunk(uid))
        // dispatch(findFollowingThunk(uid))
    }, [uid])
    console.log(publicProfile)
    return(
        <>
            <img className="w-100 " src="/images/banner.jpg" alt="banner"/>
            <img src="/images/hao.jpg" alt={"avatar"}
                 className="rounded-circle w-25 float-left ms-3 position-relative top-0 translate-middle-y"/>

            <div className="container mb-5">
                <h1>{publicProfile && publicProfile.username}'s profile</h1>
                <ProfileCard/>
                <br/><br/>
                <JoinedGroups uid={uid}/>
            </div>

        </>
    )
}

export default PublicProfile