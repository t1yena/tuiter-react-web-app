const NavigationSidebar = (active) => {
    var home, explore, notifications, messages, bookmarks, lists, profile, more = ''
    if (`${active}` == 'home') {
        home = 'active'
    } else if (`${active}` == 'explore') {
        explore = 'active'
    } else if (`${active}` == 'notifications') {
        notifications = 'active'
    } else if (`${active}` == 'messages') {
        messages = 'active'
    } else if (`${active}` == 'bookmarks') {
        bookmarks = 'active'
    } else if (`${active}` == 'lists') {
        lists = 'active'
    } else if (`${active}` == 'profile') {
        profile = 'active'
    } else if (`${active}` == 'more') {
        more = 'active'
    }
    
    return(`
      <div class="list-group">
        <a class="list-group-item" href="/">
          <i class="fab fa-twitter"></i></a>
        <a class="list-group-item list-group-item-action ${home}" href="../HomeScreen/index.html">
            <i class="fas fa-home"></i>
            <span class ="d-none d-xl-inline">Home</span></a>
        <a class="list-group-item list-group-item-action ${explore}" href="../ExploreScreen/index.html">
            <i class="fas fa-hashtag"></i>
            <span class ="d-none d-xl-inline">Explore</span></a>
        <a class="list-group-item list-group-item-action ${notifications}" href="#">
            <i class="fas fa-bell"></i>
            <span class ="d-none d-xl-inline">Notifications</span></a>
        <a class="list-group-item list-group-item-action ${messages}" href="#">
            <i class="fas fa-envelope"></i>
            <span class ="d-none d-xl-inline">Messages</span></a>
        <a class="list-group-item list-group-item-action ${bookmarks}" href="#">
            <i class="fas fa-bookmark"></i>
            <span class ="d-none d-xl-inline">Bookmarks</span></a>
        <a class="list-group-item list-group-item-action ${lists}" href="#">
            <i class="fas fa-list-ul"></i>
            <span class ="d-none d-xl-inline">Lists</span></a>
        <a class="list-group-item list-group-item-action ${profile}" href="#">
                <i class="fas fa-user"></i>
                <span class ="d-none d-xl-inline">Profile</span></a>
        <a class="list-group-item list-group-item-action ${more}" href="#">
            <i class="fas fa-ellipsis-h"></i></span>
            <span class ="d-none d-xl-inline">More</span></a>

      </div>
      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tweet</a>
      </div>
    `);
   }
export default NavigationSidebar;