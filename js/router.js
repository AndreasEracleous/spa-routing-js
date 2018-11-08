routes = {
  '/': homePage,
  '/index.html': homePage,
  '/contact': contactPage
};

var onNavItemClick = (pathName) => {
  window.history.pushState(
    {}, 
    pathName,
    window.location.origin + pathName
  );
  contentDiv.innerHTML = routes[pathName];
}

window.onpopstate = () => {
  contentDiv.innerHTML = routes[window.location.pathname];
}

var contentDiv = document.getElementById('content');
contentDiv.innerHTML = routes[window.location.pathname];