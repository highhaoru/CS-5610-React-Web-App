import LatestRecipelistItem from "./latest-recipelist-item";
import LatestRecipeItem from "./latest-recipe-item";

const Home = () => {
    return (
        <div className="container">
            <div className="clearfix">
                <a href="#">
                    <button className="btn btn-secondary rounded-pill float-end m-3">Log In</button></a>
                <a href="../omdb/omdb-search.js">
                    <button className="btn btn-secondary rounded-pill float-end m-3">
                        <i className="bi bi-search me-2"></i>Search</button></a>
                <img height={50} src="../images/hao.jpg" className="float-start me-4" alt="logo"/>
                <h1 className="fw-bold m-3 mt-4">WELCOME TO COOKIPE</h1>
            </div>

            <div className="mt-4">
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item wd-bg-blue w-25">
                        <h4 className="fw-bold m-3">LATEST <br></br>RECIPELISTS</h4>
                    </li>
                    <LatestRecipelistItem/>
                    <LatestRecipelistItem/>
                    <LatestRecipelistItem/>
                    <LatestRecipelistItem/>
                </ul>

                <ul className="list-group list-group-horizontal mt-4">
                    <li className="list-group-item wd-bg-blue w-25">
                        <h4 className="fw-bold m-3">LATEST <br></br>BOOKS</h4>
                    </li>
                    <LatestRecipeItem/>
                    <LatestRecipeItem/>
                    <LatestRecipeItem/>
                    <LatestRecipeItem/>
                </ul>
            </div>
        </div>
    );
}
export default Home;