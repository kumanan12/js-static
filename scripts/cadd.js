// create, edit, delete conferences

function addConference() {

    console.log('adding conference now');
    var formRef = $("#form");
    var form1= getFormData(formRef)
    form1.email="kumanan12@gmail.com";
    var formData = JSON.stringify(form1);
    fetch('/api/user', {
        method: 'post',
        body: formData
      }).then(function(response) {
          getForm().reset();
        return response.json();
      }).then(function(data) {
      }).catch(err => {
          console.log("error in sending data");
      });
}

function domReady() {
    $("form").on("submit", function (event) {
        event.preventDefault();
        addConference();
    });
}

$(domReady)


function getFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}


