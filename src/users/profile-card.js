import React from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";


const ProfileCard = (
    {
        me = {
            "nickName": "haojin",
            "handle": "hao",
            "avatar": "hao.jpg",
            "banner": "banner.jpg",
            "bio": "You rather be my ally or my enermy!",
            "website": 'youtube.com/webdevtv',
            "location": "Boston, MA",
            "dateOfBirth": "1996-05-04",
            "dateJoined": "2022-01",
            "followingCount": 345,
            "followersCount": 233
        }
    }
) =>{
    const navigate = useNavigate();

    return (
        <li className="row mt-4"
        //     onClick={(e)=>{
        //     navigate('/search/'+ me.nickName, {state: me})
        // }}
        >

            <div className="col-2">
                <img src="/images/hao.jpg" style={{height:180,width:180}}/>
            </div>

            <div className="d-flex justify-content-center text-decoration-none container">
                <ul class="list-unstyled">
                    <h4 className="col-4 display-6">{me.nickName}</h4>
                    <li><span className="col-4 fs-3 text-secondary text-white">
                        Bio: </span>
                        {me.bio}</li>
                    <li><span className="col-4 fs-3 text-secondary text-white">
                        Website: </span>
                        {me.website}</li>
                    <li><span className="col-4 fs-3 text-secondary text-white">
                        Location: </span>
                        {me.location}</li>
                    <li><span className="col-4 fs-3 text-secondary text-white">
                        Date Joined: </span>
                        {me.dateJoined}</li>
                    <li><span className="col-4 fs-3 text-secondary text-white">
                        DOB: </span>
                        {me.dateOfBirth}</li>
                    <li><span className="col-4 fs-3 text-secondary text-white">
                        Followers Count: </span>
                        {me.followersCount}</li>
                    <li><span className="col-4 fs-3 text-secondary text-white">
                        Following Count: </span>
                        {me.followingCount}</li>
                    <br></br>
                </ul>
            </div>
        </li>
    );
};
export default ProfileCard;