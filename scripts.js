function onReady() {
	var btns = document.querySelectorAll("a.btn");
	for(var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(e){
		    e.preventDefault()
		})
	}
}

function toggleDisplayById(id) {
	var elem = document.getElementById(id)
	elem.style.display = elem.style.display == 'block' ? 'none' : 'block';
}
