import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "../services/users-thunks";
import {useNavigate} from "react-router-dom";
import {Navigate} from "react-router";

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
            <h1>Profile</h1>
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