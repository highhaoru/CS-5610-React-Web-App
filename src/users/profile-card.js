import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBirthdayCake, faCalendarAlt, faLongArrowLeft, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";


const ProfileCard = () =>{
    // const me = useSelector((state) => state.profile);
    const {currentUser} = useSelector((state) => state.users)
    const userProfile = useSelector(
        (state) => state.profile);
    return (
        <li className="row mt-4" >
            <div className="content mt-5">

                <h5 className="pt-3">{userProfile.firstName} {userProfile.lastName}</h5>
                <p className="text-muted">@{userProfile.handle}</p>
                {
                    currentUser &&
                    <p className="text-muted">User Level: {currentUser.role}</p>
                }

                <p className="mt-2">{userProfile.bio}</p>
                <div className="d-flex justify-content-start text-muted mt-2">
                    <div className="">
                        <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                        {userProfile.location}</div>
                    <div className="ms-5">
                        <FontAwesomeIcon className="me-2" icon={faBirthdayCake}></FontAwesomeIcon>
                        {userProfile.dateOfBirth}</div>
                    <div className="ms-5">
                        Joined <FontAwesomeIcon className="me-2" icon={faCalendarAlt}></FontAwesomeIcon>
                        {userProfile.dateJoined}</div>
                </div>
                <div className="row mt-3">
                    <div className="col-2">
                        <span className="fw-bold">{userProfile.followingCount}</span>Following</div>
                    <div className="col-2">
                        <span className="fw-bold">{userProfile.followersCount} </span>Followers</div>
                </div>
            </div>
            {/*<div className="col-2">*/}
            {/*    <img src="/images/hao.jpg" style={{height:180,width:180}}/>*/}
            {/*</div>*/}

            {/*<div className="d-flex justify-content-center text-decoration-none container">*/}
            {/*    <ul class="list-unstyled">*/}
            {/*        <h4 className="col-4 display-6">{me.nickName}</h4>*/}
            {/*        <li><span className="col-4 fs-3 text-secondary text-white">*/}
            {/*            Bio: </span>*/}
            {/*            {me.bio}</li>*/}
            {/*        <li><span className="col-4 fs-3 text-secondary text-white">*/}
            {/*            Website: </span>*/}
            {/*            {me.website}</li>*/}
            {/*        <li><span className="col-4 fs-3 text-secondary text-white">*/}
            {/*            Location: </span>*/}
            {/*            {me.location}</li>*/}
            {/*        <li><span className="col-4 fs-3 text-secondary text-white">*/}
            {/*            Date Joined: </span>*/}
            {/*            {me.dateJoined}</li>*/}
            {/*        <li><span className="col-4 fs-3 text-secondary text-white">*/}
            {/*            DOB: </span>*/}
            {/*            {me.dateOfBirth}</li>*/}
            {/*        <li><span className="col-4 fs-3 text-secondary text-white">*/}
            {/*            Followers Count: </span>*/}
            {/*            {me.followersCount}</li>*/}
            {/*        <li><span className="col-4 fs-3 text-secondary text-white">*/}
            {/*            Following Count: </span>*/}
            {/*            {me.followingCount}</li>*/}
            {/*        <br></br>*/}
            {/*    </ul>*/}
            {/*</div>*/}
        </li>
    );
};
export default ProfileCard;

