import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findGameBySearchTermThunk} from "./igdb-thunks";
import GameCard from "./igdb-card";


function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('Halo')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(findGameBySearchTermThunk(searchTerm))
    }, [])

    return(
        <div>
            <ul className="list-group">
                <li className="list-group-item rounded-pill bg-white">
                    <button
                        className="btn btn-primary float-end"
                        onClick={() => {
                            dispatch(findGameBySearchTermThunk(searchTerm))
                        }}>Search
                    </button>
                    <input
                        placeholder="Enter a game to search"
                        className="form-control w-75 border-0"
                        onChange={(e) => {
                            setSearchTerm(e.target.value)
                        }}
                        value={searchTerm}/>
                </li>
            </ul>


        </div>
    );
}
export default SearchBar;