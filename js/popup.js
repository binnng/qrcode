+function( document ) {

	var qrcode = document.getElementById('qrcode');

	chrome.tabs.getSelected(function( tab ){
		qrcode.src = 'http://chart.apis.google.com/chart?chs=400x400&cht=qr&chl=' + tab.url;
	})

}( document );