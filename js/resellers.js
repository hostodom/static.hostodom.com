//*** Hostodom Resellers

// Add Panel CSS
var linkPanelCss = document.createElement("link");
linkPanelCss.rel = "stylesheet";
linkPanelCss.href = "https://static.hostodom.com/css/resellers.css";
document.head.appendChild(linkPanelCss);

// jQuery Functions
$(document).ready(function() {
	$.fakeLoader({
		bgColor: '#fff',
		spinner: 'spinner2'
	});
	$('#menu0').css('font-size', '18px');
	$('.home-banner img').width(760);
	$('.ps-homepage-masthead td a img').attr('src', 'https://static.hostodom.com/img/resellers/ps-orderbox-arch.png');
});

// 2021-06-05 21:24:15
