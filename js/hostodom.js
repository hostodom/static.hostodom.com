// HOSTODOM FUNCTIONS

// jQuery Functions
$(document).ready(function() {
	$('.top-header').prepend('<div class="top-bar-support"><span class="top-help-desk"><a href="https://help.hostodom.com" target="_blank"><i class="far fa-life-ring"></i><span>Help Desk</span></a></span><span class="top-live-chat"><a href="#!" onclick="openLiveChat();"><i class="far fa-comments"></i><span>Live Chat</span></a></span><span class="top-support-email"><a href="&#109;&#097;&#105;&#108;&#116;&#111;&#058;&#115;&#117;&#112;&#112;&#111;&#114;&#116;&#064;&#104;&#111;&#115;&#116;&#111;&#100;&#111;&#109;&#046;&#099;&#111;&#109;"><i class="far fa-envelope"></i><span>&#115;&#117;&#112;&#112;&#111;&#114;&#116;&#064;&#104;&#111;&#115;&#116;&#111;&#100;&#111;&#109;&#046;&#099;&#111;&#109;</span></a></span></div>');
});

// Live Chat
function openLiveChat() {
	window.open("https://tawk.to/chat/5ee22af74a7c6258179a6569/default", "_blank", "toolbar=no,scrollbars=yes,resizable=yes,top=500,left=500,width=500,height=580");
}

// Tawk.to
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
	var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
	s1.async=true;
	s1.src='https://embed.tawk.to/5ee22af74a7c6258179a6569/default';
	s1.charset='UTF-8';
	s1.setAttribute('crossorigin','*');
	s0.parentNode.insertBefore(s1,s0);
})();
