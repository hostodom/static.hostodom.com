//*** HOSTODOM CONTROL PANEL

if (Cookies.get('logged') === null || Cookies.get('parentid') === null) {
	window.location.replace("https://hostodom.com/login.php");
}
