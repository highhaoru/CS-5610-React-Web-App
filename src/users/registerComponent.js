import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "../services/users-thunks";
import {Navigate} from "react-router";
import {useNavigate} from "react-router-dom";


const RegisterComponent = () => {
    const [userName, setUserName] = useState('')
    const [passWord, setPassWord] = useState('')
    // const [create, setCreate] = useState('')
    const [error, setError] = useState(null)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()

    if(currentUser) {
        return (<Navigate to={'/profile'}/>)
    }
    const templateUser = {
        "role": "NORMAL",
        "email": "zhou.to@northeastern.edu",
        "nickName": "empty"
    }
    const handleRegisterBtn = () => {
        setError(null)
        const toCreate = {
            ...templateUser,
            username: userName,
            password: passWord,
        }
        // console.log(toCreate)
        dispatch(registerThunk(toCreate))
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
                    onChange={(e) => setUserName(e.target.value)}
                    className="form-control "
                    placeholder="username"
                    value={userName}/>
                Password:
                <input
                    onChange={(e) => setPassWord(e.target.value)}
                    className="form-control"
                    placeholder="password"
                    type="password"
                    value={passWord}/>
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

export default RegisterComponent