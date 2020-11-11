function hideLoadingPage() {
	document.getElementById ? document.getElementById('loading').style.display = 'none'	// DOM
	: document.all ? document.all.loading.style.display = 'none'	// IE 4
	: null;	// unsupported
}
