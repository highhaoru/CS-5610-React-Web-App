import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {changeProfile} from "./profile-reducer";

const EditProfile = () => {
    const me = useSelector(state => state.profile);
    const [profile, setProfile] = useState({
           firstName: me.firstName, lastName: me.lastName, handle: me.handle,
           bio: me.bio, website: me.website, location: me.location, dateOfBirth: me.dateOfBirth
       });
    const dispatch = useDispatch();
    const saveClickHandler = () => {dispatch(changeProfile(profile));}
    const firstNameInputHandler = (event) => {
        const newFirst = {...profile, firstName: event.target.value,
            handle: event.target.value.toLowerCase()};
        console.log(newFirst);
        setProfile(newFirst);
    }
    const lastNameInputHandler = (event) => {
        const newLast = {...profile, lastName: event.target.value};
        setProfile(newLast);
    }
    const bioInputHandler = (event) => {
        const newBio = {...profile, bio: event.target.value};
        setProfile(newBio);
    }
    const webInputHandler = (event) => {
        const newWeb = {...profile, website: event.target.value};
        setProfile(newWeb);
    }
    const locateInputHandler = (event) => {
        const newLocate = {...profile, location: event.target.value};
        setProfile(newLocate);
    }
    const birthInputHandler = (event) => {
        const newBirth = {...profile, dateOfBirth: event.target.value};
        setProfile(newBirth);
    }
    return(
        <>
            <Link to="/tuiter/profile"><i className="bi bi-x-lg float-start pt-2"></i></Link>
            <b className="float-start ms-4 pt-2">Edit profile</b>
            <Link to="/tuiter/profile">
                <button className="btn btn-dark rounded-pill float-end pt-2 mb-3"
                        onClick={saveClickHandler}>Save</button>
            </Link>

            <img className="w-100" src={`/images/${me.banner}`} alt="banner"/>
            <img src={`/images/${me.avatar}`} alt={"avatar"}
                 className="rounded-circle w-25 ms-3 position-relative top-0 translate-middle-y"/>

            <form className="end-0">
                <div className="form-group row m-2">
                    <label htmlFor="firstNameInput"
                           className="col-3 col-form-label">First name</label>
                    <div className="col-3">
                        <textarea className="form-control" id="firstNameInput" rows="1"
                                  onChange={firstNameInputHandler}>{me.firstName}</textarea>
                    </div>
                    <label htmlFor="lastNameInput"
                           className="col-3 col-form-label">Last name</label>
                    <div className="col-3">
                        <textarea className="form-control" id="lastNameInput" rows="1"
                                  onChange={lastNameInputHandler}>{me.lastName}</textarea>
                    </div>
                </div>
                <div className="form-group row m-2">
                    <label htmlFor="bioInput" className="col-3 col-form-label">Bio</label>
                    <div className="col-9">
                        <textarea className="form-control" id="bioInput" rows="2"
                                  onChange={bioInputHandler}>{me.bio}</textarea>
                    </div>
                </div>
                <div className="form-group row m-2">
                    <label htmlFor="websiteInput" className="col-3 col-form-label">Website</label>
                    <div className="col-9">
                        <textarea className="form-control" id="websiteInput" rows="1"
                                  onChange={webInputHandler}>{me.website}</textarea>
                    </div>
                </div>
                <div className="form-group row m-2">
                    <label htmlFor="locationInput" className="col-3 col-form-label">Location</label>
                    <div className="col-9">
                        <textarea className="form-control" id="locationInput" rows="1"
                                  onChange={locateInputHandler}>{me.location}</textarea>
                    </div>
                </div>
                <div className="form-group row m-2">
                    <label htmlFor="birthInput"
                           className="col-3 col-form-label">Date of Birth</label>
                    <div className="col-9">
                        <input type="date" className="form-control" id="birthInput"
                               onChange={birthInputHandler}></input>
                    </div>
                </div>
            </form>
        </>
    );
};
export default EditProfile;