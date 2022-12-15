import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../services/users-thunks";
import {Navigate, useHistory } from "react-router";
import {useNavigate} from "react-router-dom";

const LoginComponent = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLoginBtn = () => {
        try {
            dispatch(loginThunk({username, password}))
            // navigate('/profile')
        } catch (e) {
        }
    }
    const handleRegister = () => {
        navigate('/register')
    }
    if (currentUser) {
        return (<Navigate to={'/profile'}/>)
    }
    return(
        <>
            <h1 className="d-flex justify-content-center">Login</h1>
            {
                error &&
                <div className="alert alert-danger">
                    {error}
                </div>
            }
            <div className="container" style={{width:400}}>
                Username:
                <input
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control "
                    placeholder="username"
                    value={username}/>
                Password:
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    placeholder="password"
                    type="password"
                    value={password}/>
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-row align-self-center ms-2">Don't have an account?
                        <a className="d-flex justify-content-center  ms-2" onClick={handleRegister}>
                            SignUp</a></div>
                </div>
                <div className="d-flex justify-content-center">
                    <button
                        className="btn btn-primary mt-2 d-flex justify-content-center"
                        onClick={handleLoginBtn}>
                        Login
                    </button>
                </div>


            </div>


            {/*{*/}
            {/*    currentUser &&*/}
            {/*    <h2>Welcome {currentUser.username}</h2>*/}
            {/*}*/}
        </>
    )
}

export default LoginComponent