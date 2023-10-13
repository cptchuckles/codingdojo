function editProfile() {
	document.getElementById("username").textContent = "Malenia, Blade of Miquella";
}

function connectionAccept(e) {
	increaseConnectionsCount();
	resolveConnectionRequest(e);
}
function connectionRefuse(e) {
	resolveConnectionRequest(e);
}
function resolveConnectionRequest(e) {
	e.parentElement.remove();
	decreaseConnectionRequests();
}
function increaseConnectionsCount() {
	let totalConnections = document.getElementById("total-connections");
	let connectionCount = Number(totalConnections.textContent);
	totalConnections.textContent = String(connectionCount + 1);
}
function decreaseConnectionRequests() {
	let totalRequests = document.getElementById("total-requests");
	let connectionCount = Number(totalRequests.textContent);
	totalRequests.textContent = String(connectionCount - 1);
}
