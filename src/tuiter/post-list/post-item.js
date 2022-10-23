import React from "react"

const PostItem = (
    {
    post = {
        "avatarIcon": "elon.png",
        "userName": "Elon Musk",
        "handle": "@elonmusk",
        "time": "23h",
        "text": "Amazing show about ~@Inspiration4x~ mission!",
        "image": "",
        "link": "https://www.netflix.com/",
        "linkImage": "inspiration.png",
        "linkTitle": "Countdown: Inspiration4 Mission to Space | Netlix Official Site",
        "linkSummary": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
        "linkName": "netflix.com",
        "comments": "4.2K",
        "retweets": "3.5K",
        "likes": "37.5K"
    }
}

) => {
    var postText = `${post.text}`
    var beforeLink = ''
    var link = ''
    var afterLink = ''
    if (`${post.text}`.includes('~')) {
        beforeLink = postText.substring(0,postText.indexOf('~'))
        link = postText.substring(postText.indexOf("~") + 1,postText.lastIndexOf('~'))
        afterLink = postText.substring(postText.lastIndexOf('~')+1)

        postText = 
            <div>
                {beforeLink}
                <a href="/#"> {link}</a>
                {afterLink}
            </div>
        
    }

    var postContent = ''
    if (`${post.link}`.length === 0) {
        postContent = 
        <img className = "wd-image pt-2 w-100" src={`/images/${post.image}`} alt="post"/>
        
    } else {  
        postContent = 
        <div>
            <div className="pt-2">
            <img className = "wd-link-image wd-border-light w-100" src={`/images/${post.linkImage}`} alt="post link"/>   
            </div>
            <div className = "wd-rounded-bottom-border-light p-2">
                <div className="pb-1">{post.linkTitle}</div>
                <div className="text-dark">{post.linkSummary}</div>
                <i className="bi bi-link-45deg"></i>
                <a className = "text-dark" href="/#">{post.linkName}</a>
            </div>
        </div>
        
    }
    
    return(
    <li className="list-group-item">
    <div className="row">
        <div className="col-1 p-1">
            <img className="wd-image-round" src={`/images/${post.avatarIcon}`} alt="avatar"/>
        </div>
        <div className="col-11">
            <div>
                <span className="fw-bolder">{post.userName} </span>
                <i className="bi bi-patch-check-fill wd-blue-icon"></i>
                <span className="col text-secondary"> {post.handle} - {post.time}</span>    
            </div>
            {postText}
            {postContent}
            
            <div className="row pt-2">
                <div className="col">
                    <i className="bi bi-chat p-3 text-secondary"></i>
                    <span className = "text-secondary">{post.comments}</span>
                </div>
                <div className="col">
                    <i className="bi bi-repeat p-3 text-secondary"></i>
                    <span className = "text-secondary">{post.retweets}</span>
                </div>
                <div className="col">
                    <i className="bi bi-heart p-3 text-secondary"></i>
                    <span className = "text-secondary">{post.likes}</span>
                </div>
                <div className="col">
                    <i className="bi bi-upload p-3 text-secondary"></i>
                </div>
                    
            </div>
        </div>
        
    </div>
    </li>   
    
    );
}
export default PostItem;