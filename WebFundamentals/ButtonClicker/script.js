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
