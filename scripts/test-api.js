
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
  