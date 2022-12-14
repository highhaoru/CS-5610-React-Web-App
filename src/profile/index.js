import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ProfileComponent = () => {
    const me = useSelector(state => state.profile)
    return(
        <>
            <i className="bi bi-arrow-left-short fs-2 float-start"></i>
            <div className="float-start ms-3">
                <b>{me.firstName} {me.lastName}</b><br></br>
                <span className="text-secondary">6,100 Tuits</span>
            </div>

            <img className="w-100 mt-2" src={`/images/${me.banner}`} alt="banner"/>
            <img src={`/images/${me.avatar}`} alt={"avatar"}
                 className="rounded-circle w-25 float-left ms-3 position-relative top-0 translate-middle-y"/>
            <Link to="/tuiter/edit-profile">
                <button
                    className="btn border-secondary rounded-pill float-end me-3 mt-3">Edit profile</button>
            </Link>


        </>
    );
};
export default ProfileComponent;