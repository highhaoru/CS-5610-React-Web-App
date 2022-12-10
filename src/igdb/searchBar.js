import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {findGameBySearchTermThunk} from "./igdb-thunks";


function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(findGameBySearchTermThunk(searchTerm))
    }, [])

    return(
        <div className="row mb-2 mt-2">
            <form className="d-flex">
                <input className="form-control me-sm-2 rounded-pill p-2 ps-5 w-75" type="text" placeholder="Search a Game"
                       onChange={(e) => {
                           setSearchTerm(e.target.value)
                       }}
                       value={searchTerm}/>
                <button className="btn btn-primary  my-2 my-sm-0 rounded-pill ms-3 p-2 ps-4 pe-4" type="submit"
                    onClick={() => {
                        dispatch(findGameBySearchTermThunk(searchTerm))}
                }>Search</button>
            </form>

        </div>
    );
}
export default SearchBar;