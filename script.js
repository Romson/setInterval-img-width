// Add 5px to img width /100ms

var logo = document.querySelector('#imgID');
setInterval(function() { 
	logo.width += 5;
}, 100)