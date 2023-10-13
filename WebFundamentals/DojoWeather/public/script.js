document.querySelectorAll("nav p").forEach(city => {
    city.addEventListener("click", e => alert(`${e.target.textContent} is currently unavailable`));
});

document.getElementById("temp-unit").addEventListener("change", e => {
    let temps = document.querySelectorAll(".daily-temps p");
    switch(e.target.value) {
        case "fahrenheit":
            temps.forEach(temp => {
                let t = Number(temp.textContent) * 9.0/5 + 32;
                temp.textContent = String(Math.round(t));
            });
            break;
        case "celsius":
            temps.forEach(temp => {
                let t = (Number(temp.textContent) - 32) * 5.0/9;
                temp.textContent = String(Math.round(t));
            });
            break;
    }
});

document.getElementById("accept-cookies").addEventListener("click", e => {
    e.target.parentElement.remove();
});
