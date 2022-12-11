import {useDispatch, useSelector} from "react-redux";
import {getUserState} from "../redux/selectors";
import {useState} from "react";
import {login} from "../redux/actions";
import {useNavigate} from "react-router-dom";

const Login = () => {
    let [userCredential, setUserCredential] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginButtonOnClick = () => {
        login(dispatch, userCredential)
            .then(() => navigate("/home"))
            .catch(err => alert(err.response.data.error));
    }
    return (
        <div>
            <h1>Login</h1>
            <label className={"form-label"}>
                Username:
                <input className={"form-control"} type={"text"}
                       onChange={(e) =>
                           setUserCredential({...userCredential, username: e.target.value})}/>
            </label>
            <label className={"form-label"}>
                Password:
                <input className={"form-control"} type={"password"}
                       onChange={(e) =>
                           setUserCredential({...userCredential, password: e.target.value})}/>
            </label>
            <button className={"btn btn-primary"} onClick={loginButtonOnClick}>Login</button>
        </div>
    )
};
export default Login;