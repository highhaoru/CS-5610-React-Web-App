const LatestRecipelistItem = () => {
    return(
        <li className="list-group-item wd-bg-blue px-4">
            <img className="rounded m-2"
                 height={200}
                 src="../images/banner.jpg"
                 alt={"recipelist cover"}/>
            <p className="m-2">RECIPELIST NAME</p>
        </li>
    );
};
export default LatestRecipelistItem;