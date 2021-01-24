


function load_page(pageNum) {

  var loggedIn;
  document.cookie = "hello: user";
  let user = document.cookie;
  console.log(user);
  if(user==''){
    loggedIn = false;
    console.log("Not logged in");
  }
  else{
    loggedIn = true;
  }
  // Make navbar


}


function nav_bar(){
  let body = document.getElementsByTagName('body');

}


function display_login(){
  let body = document.getElementsByTagName('body');
  let login_box = document.createElement("div");
  login_box.className = "login_box";
}
