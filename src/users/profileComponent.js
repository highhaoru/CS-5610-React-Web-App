import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "../services/users-thunks";
import {Link, useNavigate} from "react-router-dom";
import {Navigate} from "react-router";
import React from "react";
import ProfileCard from "./profile-card";
import JoinedGroups from "./joined-groups";

const ProfileComponent = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {user} = useSelector((state) => state.profile)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const uid = currentUser._id.toString()

    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
        navigate('/login')
    }
    if (!currentUser) {
        return (<Navigate to={'/login'}/>)
    }
    return(
        <>
            <div className="row position-relative">
            <img className="w-100 " src="/images/banner.jpg" alt="banner"/>
            <img src="/images/hao.jpg" alt={"avatar"}
                 className="rounded-circle w-25 float-left ms-3 position-relative top-0 translate-middle-y"/>
            </div>
            {
                currentUser &&
                <h2>Welcome {currentUser.username}</h2>
            }
            <Link to="/profile/edit-profile.js">
                <button
                    className="btn border-secondary rounded-pill float-end me-3 mt-3">Edit profile</button>
            </Link>

            <button className="btn btn-danger border-secondary rounded-pill float-end me-3 mt-3"
                    onClick={handleLogoutBtn}>
                Logout
            </button>

            <ProfileCard/>
            <JoinedGroups uid={uid}/>
        </>
    )
}

export default ProfileComponent