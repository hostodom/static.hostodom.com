//** HOSTODOM FUNCTIONS

// jQuery Functions
$(document).ready(function() {
	$('.top-header').prepend('<div class="top-bar-support"><span class="top-bar-link top-help-desk"><a href="https://help.hostodom.com" target="_blank"><i class="far fa-life-ring"></i><span>Help Desk</span></a></span><span class="top-bar-link top-live-chat"><a href="#!" onclick="openLiveChat();"><i class="far fa-comments"></i><span>Live Chat</span></a></span><span class="top-bar-link top-support-email"><a href="&#109;&#097;&#105;&#108;&#116;&#111;&#058;&#115;&#117;&#112;&#112;&#111;&#114;&#116;&#064;&#104;&#111;&#115;&#116;&#111;&#100;&#111;&#109;&#046;&#099;&#111;&#109;"><i class="far fa-envelope"></i><span>&#115;&#117;&#112;&#112;&#111;&#114;&#116;&#064;&#104;&#111;&#115;&#116;&#111;&#100;&#111;&#109;&#046;&#099;&#111;&#109;</span></a></span></div>');
	$('#branding .logo-cont').prepend('<span class="logo-support-info"><span class="logo-support-box"><i class="fas fa-award"></i><h5>30 Days Money Back</h5><p>Your Satisfaction Guaranteed</p></span><span class="logo-support-box"><i class="fas fa-server"></i></i><h5>100% Reliability</h5><p>Top Notch Hardware</p></span><span class="logo-support-box"><i class="fas fa-power-off"></i><h5>99.9% Uptime</h5><p>Our Services Priority</p></span></span>');
	$('.copyright-info-container').prepend('<span class="footer-social-links rfloat">Follow us <a href="https://www.facebook.com/hostodom" title="Like us on Facebook" target="_blank"><i class="fab fa-facebook-square"></i></a><a href="https://twitter.com/hostodom" title="Follow us on Twitter" target="_blank"><i class="fab fa-twitter-square"></i></a><a href="https://pinterest.com/hostodom" title="Follow us on Pinterest" target="_blank"><i class="fab fa-pinterest-square"></i></a><a href="https://linkedin.com/company/hostodom" title="Connect with us on Linkedin" target="_blank"><i class="fab fa-linkedin"></i></a></span><span class="footer-link-blog rfloat"><a href="https://blog.hostodom.com" title="Read Our Blog" target="_blank"><i class="fas fa-blog"></i>Company Blog</a></span>');
	$('#page-footer .col.four .secondary-links:nth-child(2) a').click(function(e){
		e.preventDefault();
		window.location = 'https://help.hostodom.com/portal/newticket';
	});
	$('a').filter('[href^="https"], [href^="//"]').not('[href*="' + window.location.host + '"]').attr('rel', 'noopener noreferrer').attr('target', '_blank');
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
