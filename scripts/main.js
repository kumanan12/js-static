function init() {
  getUserInfo().then((data) => {
    if (data && data.userDetails) {
      hide("anonymousMenu");
      show("authenticatedMenu") 
    }else{
      hide("authenticatedMenu");
      show("anonymousMenu") 
    }
  }).catch((err) =>{
    console.error(err);
    hide("authenticatedMenu");
    show("anonymousMenu") 
  })
}

init();