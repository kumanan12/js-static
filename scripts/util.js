const firebaseConfig = {
    apiKey: "AIzaSyCiU8P5_4m__eFlw2DuESGh7ChFjJ3nM_0",
    authDomain: "ecms-fe4eb.firebaseapp.com",
    projectId: "ecms-fe4eb",
    storageBucket: "ecms-fe4eb.appspot.com",
    messagingSenderId: "741126641190",
    appId: "1:741126641190:web:7f4fc819e8d1c3432d78e7"
  };
  
function getById(id) {
    return document.getElementById(id);
}

function hide(id) {
    getById(id).style.display = "none";
}

function show(id) {
    getById(id).removeAttribute("display");
}

function disable(id){
    getById(id).attributes["disabled"] = "true";
}
function enable(id){
    getById(id).removeAttribute("disabled");
}

function getForm(){
    return document.forms[0];
}

const formToJSON = elements => [].reduce.call(elements, (data, element) => {
    data[element.name] = element.value;
    return data;
  }, {});

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
