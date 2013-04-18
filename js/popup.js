+function( document, $ ) {

	var qrcode = document.getElementById('qrcode'),
		url = document.getElementById('url');

	chrome.tabs.getSelected(function( tab ){
		/*qrcode.src = 'http://chart.apis.google.com/chart?chs=400x400&cht=qr&chl=' + tab.url;*/

		$(qrcode).qrcode({width: 300,height: 300,text: tab.url});

		$.getJSON('http://126.am/api!shorten.action?key=2559c3c1da424bf89c4151627c072ff1&longUrl=' + tab.url, function( data ) {
			url.innerHTML = data.url;
		});
		
	})

}( document, jQuery );