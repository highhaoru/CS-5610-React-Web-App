import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "../services/users-thunks";
import {useNavigate} from "react-router-dom";
import banner from "../../public/images/banner.jpg";
import avatar from "../../public/images/hao.jpg";
import {Navigate} from "react-router";
import React from "react";

const ProfileComponent = () => {
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
        navigate('/login')
    }
    if (!currentUser) {
        return (<Navigate to={'/login'}/>)
    }
    return(
        <>
            <i className="bi bi-arrow-left-short fs-2 float-start"></i>
            <div className="float-start ms-3">
                <b>{currentUser.firstName} {currentUser.lastName}</b><br></br>
                <span className="text-secondary">6,100 Tuits</span>
            </div>
            <img className="w-100 mt-2" src={banner} alt="banner"/>
            <img src={avatar} alt={"avatar"}
                 className="rounded-circle w-25 float-left ms-3 position-relative top-0 translate-middle-y"/>
            {/*<h1>Profile</h1>*/}
            {
                currentUser &&
                <h2>Welcome {currentUser.username}</h2>
            }
            <button className="btn btn-danger"
                    onClick={handleLogoutBtn}>
                Logout
            </button>
        </>
    )
}

export default ProfileComponent