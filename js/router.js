var homePage = `
	<h1>Title here for HOMEPAGE</h1>
`;

var contactPage = `<h1>Title here for CONTACT PAGE</h1>`

routes = {
  '/': homePage,
  '/contact': contactPage
};

var contentDiv = document.getElementById('content');
contentDiv.innerHTML = routes[window.location.pathname];

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