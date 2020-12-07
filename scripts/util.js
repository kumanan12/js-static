function getById(id) {
    return document.getElementById(id);
}

function hide(id) {
    getById(id).style.display = "none";
}

function show(id) {
    getById(id).removeAttribute("display");
}