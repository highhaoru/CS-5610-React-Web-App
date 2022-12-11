import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

function DetailComponent() {
    const params = useParams();

    const gameId = params.gid;
    return(
        <div className="container">
            <h2>Detail</h2>
            {gameId}
        </div>
    );
}
export default DetailComponent;