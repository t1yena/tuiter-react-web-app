import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-11">
                    <div class="position-relative">
                        <input class="px-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                        <i class="position-absolute fas fa-search text-muted wd-search-icon"></i>
                    </div>
                </div>
                <div class="col-1">
                    <div class="position-relative">
                        <i class="position-absolute fas fa-cog fa-2x text-primary wd-cog"></i>
                    </div>
                </div>
            </div>

            <ul class="nav mb-2 mt-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link d-none d-md-inline-block" href="#">Entertainment</a>
                </li>
            </ul>
            <!-- image with overlaid text -->
            <div class="position-relative mb-2">
                <img src="../../images/spaceship.jpg" width="100%"/>
                <h3 class="position-absolute bottom-0 left-0 text-black fw-bolder">SpaceX's Starship</h3>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
