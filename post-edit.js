let data = null;
let dataItem = null;

function editPost(id) {
    console.log(`post id = ${id}`);
    
}
function displayPosts() {
   console.log(JSON.stringify(data));
   $("#title")[0].value = data.title;
   $("#author")[0].value =data.author;
   

}
function onSuccess(data) {
    console.log(`done. ${data}`);
}

function onError(err){
    console.error(`failed. ${err}`);
}


function jqueryPost(data){
    let id = getId();

    var url = `http://localhost:3000/posts/${id}`;

    $.ajax({
        type: "PUT",
        url: url,
        data: data,
        success: onSuccess,
        fail: onError,
        dataType: "json"
      });
}
function saveData(){
    
    var formRef = $("#form");
    var form1 = getFormData(formRef);
    jqueryPost(form1)

}

function getId(){
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    var id = hashes[0].slice(3);
    return id;
}

function onPostListReady() {
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    var id = hashes[0].slice(3);
    var postUrl = `http://localhost:3000/posts/${id}`;
    $.get(postUrl, function (result) {
        data = result;
        displayPosts()
    });
}

function getFormData($form) {
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function (n, i) {
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}
$(onPostListReady);