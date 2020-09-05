//*** HOSTODOM CONTROL PANEL

// jQuery Functions
$(document).ready(function() {
	$('#preloader').fade();

});

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

// Add Footer Text
var current_year = new Date().getFullYear();
var footer_copyright = document.getElementById("footer-wrapper");
footer_copyright.prepend("<div class=\"footer-copyright\">&copy; " + current_year + " Hostodom. All rights reserved.</div>");
