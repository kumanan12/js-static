async function getUserInfo() {
  const response = await fetch("/.auth/me");
  const payload = await response.json();
  const { clientPrincipal } = payload;
  return clientPrincipal;
}

console.log(getUserInfo());

// (async function() {
//   let { text } = await( await fetch(`/api/message`)).json();
//   console.log(JSON.stringify(text));
//   document.querySelector('#name').textContent = text;
// }())

(async function () {
  let { text } = await (await fetch(`/api/user`)).json();
  console.log(JSON.stringify(text));
  document.querySelector('#name').textContent = text;
}())
function getById(id){
  return document.getElementById(id);
}
function hide(id) {
  getById(id).style.display = "none";
}

function show(id) {
  getById(id).removeAttribute("display");
}

hide("authenticatedMenu");