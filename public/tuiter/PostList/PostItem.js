const PostItem = (post) => {
    var postText = `${post.text}`
    var beforeLink = ''
    var link = ''
    var afterLink = ''
    if (`${post.text}`.includes('~')) {
        beforeLink = postText.substring(0,postText.indexOf('~'))
        link = postText.substring(postText.indexOf("~") + 1,postText.lastIndexOf('~'))
        afterLink = postText.substring(postText.lastIndexOf('~')+1)
        console.log(beforeLink);
        console.log(link);
        console.log(afterLink);
        postText = `
            <div>
                ${beforeLink}
                <a href=#> ${link}</a>
                ${afterLink}
            </div>
        `
    }

    var postContent = ''
    if (`${post.link}`.length === 0) {
        postContent = `
        <img class = "wd-image pt-2" src="${post.image}" width=100%/>
        `
    } else {  
        postContent = `
        <div class="pt-2">
            <img class = "wd-link-image wd-border" src="${post.linkImage}" width=100%/>   
        </div>
        <div class = "wd-rounded-bottom-border p-2">
            <div class="pb-1">${post.linkTitle}</div>
            <div class="text-dark">${post.linkSummary}</div>
            <i class="fas fa-link text-dark"></i>
            <a class = "text-dark" href=#>${post.linkName}</a>
        </div>
        `
    }
    
    return(`
    <li class="list-group-item">
    <div class="row">
        <div class="col-1 p-1">
            <img class="wd-image-round" src="../../images/${post.avatarIcon}"/>
        </div>
        <div class="col-11">
            <div>
                <span class="fw-bolder">${post.userName}</span>
                <i class="fas fa-check-circle fa-inverse"></i>
                <span class="col text-dark"> ${post.handle} - ${post.time}</span>    
            </div>
            ${postText}
            ${postContent}
            
            <div class="row">
                <div class="col text-dark">
                    <i class="far fa-comment p-3"></i>
                    <span>${post.comments}</span>
                </div>
                <div class="col text-dark">
                    <i class="fas fa-retweet p-3"></i>
                    <span>${post.retweets}</span>
                </div>
                <div class="col text-dark">
                    <i class="far fa-heart p-3"></i>
                    <span>${post.likes}</span>
                </div>
                <div class="col text-dark">
                    <i class="fas fa-share-square p-3"></i>
                </div>
                    
            </div>
        </div>
        
    </div>
    </li>   
    `
    );
}
export default PostItem;