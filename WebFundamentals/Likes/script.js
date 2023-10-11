function addLike(btn) {
	const count = btn.parentElement.querySelector(".count");
	let number = Number(count.textContent);
	count.textContent = String(++number);
}

document.querySelectorAll(".likes button").forEach(btn => {
	btn.addEventListener("click", e => addLike(e.target));
});
