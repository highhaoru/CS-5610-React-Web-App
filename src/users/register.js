import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "../services/users-thunks";
import {Navigate} from "react-router";
import {useNavigate} from "react-router-dom";


const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        setError(null)
        // console.log(currentUser)
        dispatch(registerThunk({username, password}))
    }
    if(currentUser) {
        return (<Navigate to={'/profile'}/>)
    }
    return(
        <>
            <h1 className="d-flex justify-content-center">Register</h1>
            {/*{*/}
            {/*    error &&*/}
            {/*    <div className="alert alert-danger">*/}
            {/*        {error}*/}
            {/*    </div>*/}
            {/*}*/}
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
                    value={password}/>
            </div>
            <div className="d-flex justify-content-center">

                <button
                    className="btn btn-primary mt-2"
                    onClick={handleRegisterBtn}>
                    Register
                </button>
            </div>

            {
                currentUser &&
                <h1>Welcome new user: {currentUser.username}</h1>
            }
        </>
    )
}

export default Register