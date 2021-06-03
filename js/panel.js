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
	// Style sub-menu
	var main_submenus = document.querySelectorAll("#control-panel-menu #menu1, #control-panel-menu #menu2, #control-panel-menu #menu3, #control-panel-menu #menu4, #control-panel-menu #menu5, #control-panel-menu #menu6, #control-panel-menu #menu7, #control-panel-menu #menu8");
	main_submenus.style.background = "#405f77 !important";
	// If logged out return to main login
	if (window.location.href = 'https://panel.hostodom.com/servlet/AuthServlet') {
		window.location.replace("https://panel.hostodom.com/servlet/LoginServlet?role=customer&currenturl=https://panel.hostodom.com");
	}
});

// Add Footer Text
var current_year = new Date().getFullYear();
var footer_year = document.getElementById("current-year");
footer_year.innerHTML(current_year);

// 2021-06-03 17:19:47
