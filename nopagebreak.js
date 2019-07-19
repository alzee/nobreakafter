;function f(){
	var d = document.getElementsByClassName('loaded');
	if (d.length > 0) {
		for (var i = 0; i < d.length; i++) {
			d[i].style.removeProperty('break-after');
			d[i].style.removeProperty('page-break-after');
			d[i].style.setProperty('margin-bottom', '80px');
		}
	}

	var form = document.getElementsByTagName('form');
	for (var i = 0; i < form.length; i++) {
		form[i].firstElementChild.remove();
		form[i].lastElementChild.remove();
		var img = form[i].getElementsByTagName('img');
		for ( var j = 0; j < img.length; j++) {
			img[j].style.setProperty('display', 'none');
		}
	}
}
setTimeout(f, 2000);
//window.onload = f;
