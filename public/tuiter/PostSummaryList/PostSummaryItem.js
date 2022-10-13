const PostSummaryItem = (post) => {
    return(`
    <li class="list-group-item">
    <div class="row">
        <div class="col-10">
            <div class="text-dark">
                ${post.topic}
            </div>
            <div>
                <span class="fw-bolder">${post.userName}</span>
                <i class="fas fa-check-circle fa-inverse"></i>
                <span class="col text-dark"> - ${post.time}</span>    
            </div>
            
            <div class="fw-bolder">
            ${post.title}
            </div>
        </div>
        <div class="col-2">
            <img class="float-end wd-post-pic" src="${post.image}"/>
        </div>
    </div>
    </li>   
    `
    );
}
export default PostSummaryItem;