window.addEventListener('resize', windowResized);

window.onload = (event) => {
	const content = document.getElementById("page-content");
	if (window.innerWidth <= 900) {
		content.classList.add('mobile')
	} else {
		content.classList.remove('mobile')
	}
}

function windowResized() {
	const content = document.getElementById("page-content");
	if (window.innerWidth <= 900) {
		content.classList.add('mobile')
	} else {
		content.classList.remove('mobile')
	}
}

