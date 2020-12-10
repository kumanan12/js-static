var postUrl = 'http://localhost:3000/posts';
let data = null;
let dataItem = null;

function editPost(id) {
    console.log(`post id = ${id}`);
    
}

function onSuccess(data) {
    console.log(`done. ${data}`);
    location.reload();
}

function onError(err){
    console.error(`failed. ${err}`);
}

function deletePost(id){
   let confirmDelete = confirm('Are you sure');
   var url = `http://localhost:3000/posts/${id}`;
   
   console.log(confirmDelete);
   if(confirmDelete){
    $.ajax({
        type: "DELETE",
        url: url,
        success: onSuccess,
        fail: onError,
        dataType: "json"
      });
   }
  
   
}
function displayPosts() {
    let rows = [];
    $.each(data, function (index, dataItem) {
       // console.log(`index: ${index}, value: ${dataItem.title}`);
        var row_template = ` <tr>
                            <td>${dataItem.id}</td>
                            <td>${dataItem.author}</td>
                            <td>${dataItem.title}</td>
                            <td><a href="/post-edit.html?id=${dataItem.id}" class="btn btn-primary" onclick="editPost(${dataItem.id})">Edit</a></td>
                            <td><button onclick="deletePost(${dataItem.id})"  class="btn btn-primary" >Delete</a></td>
                        </tr>`;
                        rows.push(row_template);
        // console.log(row_template);
    });
    $("#tableBody").append(rows);

}

function onPostListReady() {
    $.get(postUrl, function (result) {
        data = result;
        displayPosts()
    });
}
$(onPostListReady);