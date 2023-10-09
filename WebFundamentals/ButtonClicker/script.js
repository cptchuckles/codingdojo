let loggedIn = false;

function login(btn) {
	if (loggedIn) {
		btn.textContent = "Logout";
	}
	else {
		btn.textContent = "Login";
	}
	loggedIn = !loggedIn;
}

function addDefinition(btn) {
	btn.remove();
}

function like(btn) {
	const word = btn.getAttribute("data-word");
	const number = btn.getElementsByClassName("number")[0]
	number.textContent = String(Number(number.textContent) + 1);
	alert(`${word} was liked`);
}

document.querySelectorAll("button.like").forEach(btn => {
	btn.addEventListener("click", e => like(e.target));
});
