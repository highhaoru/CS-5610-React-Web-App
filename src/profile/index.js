import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ProfileComponent = () => {
    const me = useSelector(state => state.profile)
    console.log(me)
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

            <div className="ms-3 me-3">
                <h4>{me.firstName} {me.lastName}</h4>
                <p className="text-secondary">@{me.handle}</p>
                <p>{me.bio}</p>

                <div className="row mb-3">
                    <div className="col-4">
                        <i className="bi bi-geo-alt text-secondary"></i>
                        <span className="text-secondary"> {me.location}</span>
                    </div>
                    <div className="col-4">
                        <i className="bi bi-balloon text-secondary"></i>
                        <span className="text-secondary"> Born {me.dateOfBirth}</span>
                    </div>
                    <div className="col-4">
                        <i className="bi bi-calendar3 text-secondary"></i>
                        <span className="text-secondary"> Joined {me.dateJoined}</span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-3">
                        <b className="text-dark">{me.followingCount}</b>
                        <span className="text-secondary"> Following</span>
                    </div>
                    <div className="col-3">
                        <b className="text-dark">{me.followersCount}</b>
                        <span className="text-secondary"> Followers</span>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ProfileComponent;