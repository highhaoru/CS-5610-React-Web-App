import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "../services/users-thunks";
import {Navigate} from "react-router";
import {useNavigate} from "react-router-dom";


const RegisterComponent = () => {
    const [userName, setUserName] = useState('')
    const [passWord, setPassWord] = useState('')
    const [level, setLevel] = useState('')
    // const [create, setCreate] = useState('')
    const [error, setError] = useState(null)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()

    if(currentUser) {
        return (<Navigate to={'/profile'}/>)
    }
    const templateUser = {
        "email": "zhou.to@northeastern.edu",
        "nickName": "empty"
    }
    const handleRegisterBtn = () => {
        setError(null)
        const toCreate = {
            ...templateUser,
            username: userName,
            password: passWord,
            role: level? level: 'NORMAL'
        }
        // console.log(toCreate)
        dispatch(registerThunk(toCreate))
    }
    const handleLevel =(e) => {
        setLevel(e.target.value)
        // console.log(e.target.value)
        // console.log(level)
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

            <div className="d-flex justify-content-center p-2" value={level}>
                <label className="p-2">User type:</label>
                <input type="radio" value="NORMAL"
                       name="radio-genre" id="radio-comedy"
                onClick={handleLevel}/>
                <label  className="p-2" htmlFor="radio-comedy">Normal</label><br/>
                <input type="radio" value="ADMIN"
                       name="radio-genre" id="radio-drama"
                       onClick={handleLevel}/>
                <label  className="p-2" htmlFor="radio-drama">Admin</label><br/>
                <input type="radio" value="OWNER"
                       name="radio-genre" id="radio-scifi"
                       onClick={handleLevel}/>
                <label  className="p-2" htmlFor="radio-scifi">Owner</label><br/>

            </div>
            <div className="d-flex justify-content-center">
                <button
                    className="btn btn-primary m-2"
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