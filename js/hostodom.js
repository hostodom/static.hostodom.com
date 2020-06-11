// HOSTODOM FUNCTIONS

// Live Chat
function openLiveChat() {
	window.open("https://tawk.to/chat/5ee22af74a7c6258179a6569/default", "_blank", "toolbar=no,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=600");
}

// jQuery Functions
$(document).ready(function() {
	$('.top-header').prepend('<div class="top-bar-support"><span class="top-support-email"><a href="&#109;&#097;&#105;&#108;&#116;&#111;&#058;&#115;&#117;&#112;&#112;&#111;&#114;&#116;&#064;&#104;&#111;&#115;&#116;&#111;&#100;&#111;&#109;&#046;&#099;&#111;&#109;"><i class="far fa-envelope"></i><span>&#115;&#117;&#112;&#112;&#111;&#114;&#116;&#064;&#104;&#111;&#115;&#116;&#111;&#100;&#111;&#109;&#046;&#099;&#111;&#109;</span></a></span><span class="top-live-chat"><a href="#live-chat"><i class="far fa-comments"></i><span>Live Chat</span></a></span></div>');
	$( "#live-chat" ).click(function() {
		openLiveChat();
	});
});
