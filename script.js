

function open(){
	document.getElementsByClassName("open")[0].style.display = "none";
	document.getElementsByClassName("close")[0].style.display = "block";
	document.getElementsByTagName("nav")[0].style.display = "block";
}

function close(){
	document.getElementsByClassName("close")[0].style.display = "none";
	document.getElementsByClassName("open")[0].style.display = "block";
	document.getElementsByTagName("nav")[0].style.display = "none";
}