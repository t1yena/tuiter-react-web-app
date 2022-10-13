const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item">
        <div class="row">
            <div class="col-2">
                <img class="wd-image-round" src="../../images/${who.avatarIcon}"/>
            </div>
            <div class="col-6 text-nowrap">
                <div class="fw-bolder">
                    ${who.userName}
                    <i class="fas fa-check-circle fa-inverse"></i>
                </div>
                <div class="text-white">@${who.handle}</div>
            </div>
            <div class="col-4 pt-2">
                <button class="btn btn-primary w-100 rounded-pill">
                    Follow
                </button>
            </div>
        </div>
    </li>  
    `
    );
}
export default WhoToFollowListItem;