import {useDispatch, useSelector} from "react-redux";
import {current} from "@reduxjs/toolkit";
import {logoutThunk} from "./users-thunks";

const Profile = () => {
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logoutThunk())
    }
    return(
        <>
            <h1>Profile</h1>
            {
                currentUser &&
                <h2>Welcome {currentUser.username}</h2>
            }
            <button className="btn btn-danger" onClick={handleLogout}>
                Logout
            </button>
        </>
    )
}

export default Profile