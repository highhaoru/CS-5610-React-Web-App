import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../reducers/profile-reducer";

const EditProfile = () => {
    const userProfile = useSelector((state) => state.profile);
    const initialData = {...userProfile};
    const [profileState, setProfileState] = useState(userProfile);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const changesHandler = (event) => {
        const fieldName = event.target.name;
        const changedValue = event.target.value;
        const newProfile = {
            ...profileState,
            [fieldName]: changedValue
        }
        setProfileState(newProfile);
    }
    const saveHandler = () => {
        dispatch(updateProfile(profileState));
        navigate('/profile');
    }
    return (
        <div>
            <img className="w-100 " src="/images/banner.jpg" alt="banner"/>
            <img src="/images/hao.jpg" alt={"avatar"}
                 className="rounded-circle w-25 float-left ms-3 position-relative top-0 translate-middle-y"/>

            <button className="btn btn-primary rounded-pill float-end me-3 mt-3 fs-4 pe-4 ps-4"
                    onClick={saveHandler}>
                Save Changes
            </button>

            <div className="container mb-5">
                <form className="">
                    <div className="form-floating wd-top-margin-form">
                        <input type="text" className="form-control " id="firstName" name="firstName"
                               value={profileState.firstName} onChange={changesHandler}/>
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="form-floating mt-2">
                        <input type="text" className="form-control " id="lastName" name="lastName"
                               value={profileState.lastName} onChange={changesHandler}/>
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                    <div className="form-floating mt-2">
                <textarea className="form-control h-auto  " id="bio" name="bio" value={profileState.bio}
                          onChange={changesHandler}/>
                        <label htmlFor="bio">Bio</label>
                    </div>
                    <div className="form-floating mt-2">
                        <input type="text" className="form-control " id="location" name="location" value={profileState.location}
                               onChange={changesHandler}/>
                        <label htmlFor="location">Location</label>
                    </div>
                    <div className="form-floating mt-2">
                        <input type="text" className="form-control " id="website" name="website"
                               value={profileState.website} onChange={changesHandler}/>
                        <label htmlFor="website">Web Site</label>
                    </div>
                    <div className="form-floating mt-2">
                        <input type="date" className="form-control " id="dateOfBirth" name="dateOfBirth"
                               value={profileState.dateOfBirth} onChange={changesHandler}/>
                        <label htmlFor="dateOfBirth">Date Of Birth</label>
                    </div>
                    Switch to professional
                    {/*<FontAwesomeIcon className="float-end" icon={faArrowRight}></FontAwesomeIcon>*/}
                </form>
            </div>
        </div>
    )
}

export default EditProfile;