import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "../services/users-thunks";


const Register = () => {
    const [username, setUsername] = useState('dan')
    const [password, setPassword] = useState('dan123')
    const [error, setError] = useState(null)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        setError(null)
        dispatch(registerThunk({username, password}))
    }
    return(
        <>
            <h1>Register</h1>
            {/*{*/}
            {/*    error &&*/}
            {/*    <div className="alert alert-danger">*/}
            {/*        {error}*/}
            {/*    </div>*/}
            {/*}*/}
            <div className="container" style={{width:400}}>
                <input
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control "
                    placeholder="username"
                    value={username}/>
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