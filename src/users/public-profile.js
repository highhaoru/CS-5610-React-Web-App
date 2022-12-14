import {useParams} from "react-router";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findUserByIdThunk} from "../services/users-thunks";
import {findJoinedThunk} from "../services/group-thunks";


const PublicProfile = () => {
    const {uid} = useParams()
    const {publicProfile} = useSelector((state) => state.users)
    // const {reviews} = useSelector((state) => state.reviews)
    const {joined} = useSelector((state) => state.group)
    const dispatch = useDispatch()
    console.log(joined)
    useEffect(() => {
        dispatch(findUserByIdThunk(uid))
        dispatch(findJoinedThunk(uid))
    }, [])
    return(
        <>

            <h1>{publicProfile && publicProfile.username}'s profile</h1>
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
            <div className="list-group">
                {
                    joined && joined.map((group) =>
                        <li>{group.gameName}</li>
                    )
                }
            </div>

        </>
    )
}

export default PublicProfile