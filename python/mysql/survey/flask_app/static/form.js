function submitForm(el) {
    document.getElementById("devices").value =
        Array.from(document.querySelectorAll("input[type='checkbox']"))
             .filter(el => el.checked)
             .map(el => el.id)
             .join(',');

    el.form.submit();
}
