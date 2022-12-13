import {useParams} from "react-router";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";


const PublicProfile = () => {
    const {uid} = useParams()
    const {publicProfile} = useSelector((state) => state.users)
    // const {reviews} = useSelector((state) => state.reviews)
    const {joined} = useSelector((state) => state.group)
    // const {followers, following} = useSelector((state) => state.follows)
    const dispatch = useDispatch()

    useEffect(() => {


    }, [uid])
    return(
        <>

            <h1>{publicProfile && publicProfile.username}</h1>
            {/*<ul>*/}
            {/*    {*/}
            {/*        reviews && reviews.map((review) =>*/}
            {/*        <li>*/}
            {/*            <Link to={`/details/${review.imdbID}`}>*/}
            {/*            {review.review} {review.imdbID}*/}
            {/*            </Link>*/}
            {/*        </li>*/}
            {/*        )*/}
            {/*    }*/}
            {/*</ul>*/}
            <h2>Joined Groups</h2>
            {/*<div className="list-group">*/}
            {/*    {*/}
            {/*        following && following.map((follow) =>*/}
            {/*            <Link to={`/profile/${follow.followed._id}`} className="list-group-item">*/}
            {/*                {follow.followed.username}*/}
            {/*            </Link>*/}
            {/*        )*/}
            {/*    }*/}
            {/*</div>*/}

        </>
    )
}

export default PublicProfile