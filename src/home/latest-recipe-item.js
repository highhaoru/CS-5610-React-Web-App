const LatestRecipeItem = () => {
    return(
        <li className="list-group-item wd-bg-blue px-4">
            <img className="rounded m-2" height={200}
                 src="../images/banner.jpg"
                 alt={"recipe cover"}/>
            <p className="m-2">RECIPE TITLE</p>
        </li>
    );
};
export default LatestRecipeItem;