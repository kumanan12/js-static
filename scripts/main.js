function init() {
  getUserInfo().then((data) => {
    if (data && data.userDetails) {
      getById("menu").innerHTML = authenticatedMenuTemplate;
    }else{
      getById("menu").innerHTML = anonymousMenuTemplate; 
    }
  }).catch((err) =>{
    console.error(err);
    getById("menu").innerHTML = anonymousMenuTemplate; 
  })
}

init();