const url ="http://localhost:3000/posts";
function onSubmitClicked() {
    event.preventDefault();
    var formRef = $("#form");
    var form1 = getFormData(formRef);
    jqueryPost(form1);
}
function jqueryPost(data){
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: onSuccess,
        fail: onError,
        dataType: "json"
      });
}

function onSuccess(data) {
    console.log(`done. ${data}`);
}

function onError(err){
    console.error(`failed. ${err}`);
}



function domReady() {
    $('form').on("submit", onSubmitClicked);
}



function onDataReceived(data) {
    console.log("New Data");
    console.log(data);
}

fetch('http://localhost:3000/posts')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

function getFormData($form) {
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function (n, i) {
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}

$(domReady);