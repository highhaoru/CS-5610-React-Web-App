import GameItem from "../home/gameItem";

const HomeGallery = ({
     games = [{
          title: "Spider-Man: No Way Home",
          release_date: "2021-12-15",
          poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
      }]
                      }) => {
    return (
        <div className={"row"}>
            {
                games && games.map(game => <GameItem key={game.id} game={game}/>)
            }
        </div>
    )
};
export default HomeGallery;