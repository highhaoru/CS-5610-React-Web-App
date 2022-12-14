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
            "bio": "Master of Science in Computer Science, Graduate student of Northeastern University",
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
        <li className="row mt-4" onClick={(e)=>{
            navigate('/search/'+ me.nickName, {state: me})
        }}>

            <div className="col-2">
                <img src="/images/hao.jpg" style={{height:180,width:180}}/>
            </div>

            <div className="text-decoration-none">
                <ul class="list-unstyled">
                    <h4>{me.nickName}</h4>
                    <li>bio: {me.bio}</li>
                    <li>website: {me.website}</li>
                    <li>Location: {me.location}</li>
                    <li>Date Joined: {me.dateJoined}</li>
                    <li>DOB: {me.dateOfBirth}</li>
                    <li>Followers Count:{me.followersCount}</li>
                    <li>Following Count: {me.followingCount}</li>
                </ul>

            </div>
        </li>
    );
};
export default ProfileCard;