//*** HOSTODOM CONTROL PANEL

// Preloader
function removePreloader() {
	var preloader = document.getElementById("preloader");
	preloader.parentNode.removeChild(preloader);
}
window.onload="removePreloader()";

// Add Favicon
var linkFavicon = document.createElement("link");
linkFavicon.rel = "shortcut icon";
linkFavicon.href = "https://static.hostodom.com/img/favicon.png";
document.head.appendChild(linkFavicon);

// Add Panel CSS
var linkPanelCss = document.createElement("link");
linkPanelCss.rel = "stylesheet";
linkPanelCss.href = "https://static.hostodom.com/css/panel.css";
document.head.appendChild(linkPanelCss);

// Events on page load
document.addEventListener("DOMContentLoaded", function() {
	// Default login type set to customer
	var login_role = document.getElementById('login-role');
	login_role.options[0].selected = true;
});

// 2021-06-03 18:57:03
