const GameItem = ({
                       game = {
                           title: "Spider-Man: No Way Home",
                           release_date: "2021-12-15",
                           poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
                       }
                   }) => {
    return (
        <div className={"col-3 card"}>
            <img className={"card-img-top"}
                 src={`${process.env.REACT_APP_MOVIE_BASE_URL}/w342/${game.poster_path}`}
                // src={`${process.env.REACT_APP_BASE_URL}/w342/${game.poster_path}`}
                //  src={"..."}
                 alt={"..."}/>
            <div className={"card-body"}>
                <h5 className={"card-title"}>{game.title}</h5>
                <h6 className={"card-subtitle"}>{game.release_date}</h6>
            </div>
        </div>
    )
};
export default GameItem;