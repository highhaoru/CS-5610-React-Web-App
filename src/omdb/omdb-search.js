import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
// import {findMovieBySearchTermThunk} from "./omdb-thunks";
// import {userLikesMovieThunk} from "../likes/likes-thunks";

const OmdbSearch = () => {
    const [searchTerm, setSearchTerm] = useState('Avatar')
    const {movies, loading} = useSelector((state) => state.omdb)
    const dispatch = useDispatch()
    useEffect(() => {
        // dispatch(findMovieBySearchTermThunk(searchTerm))
    }, [])
    return (
        <>
            <h1>Omdb Search</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <button
                        className="btn btn-primary float-end"
                        onClick={() => {
                            // dispatch(findMovieBySearchTermThunk(searchTerm))
                        }}>Search
                    </button>
                    <input
                        className="form-control w-75"
                        onChange={(e) => {
                            setSearchTerm(e.target.value)
                        }}
                        value={searchTerm}/>
                </li>
                {
                    movies && movies.map((movie) =>
                                             <li key={movie.imdbID} className="list-group-item">
                                                 <i onClick={() => {
                                                     // dispatch(userLikesMovieThunk({
                                                     //                                  uid: 111, mid: movie.imdbID
                                                     //                              }))
                                                 }} className="float-end bi bi-hand-thumbs-up"></i>
                                                 <i className="float-end bi bi-hand-thumbs-down me-2"></i>
                                                 {movie.Title}
                                             </li>
                           )
                }
            </ul>
        </>
    )
}

export default OmdbSearch