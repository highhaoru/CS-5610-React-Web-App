import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {register} from "../redux/actions";

const Index = () => {
    let [userCredential, setUserCredential] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const registerButtonOnClick = () => {
        register(dispatch, userCredential)
            .then(() => navigate("/home"))
            .catch(err => alert(err.response.data.error));
    }
    return (
        <div>
            <h1>Register</h1>
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
            <button className={"btn btn-primary"}
                    onClick={registerButtonOnClick}>Register</button>
        </div>
    )
};
export default Index;