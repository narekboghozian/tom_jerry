


function load_page(pageNum) {

  var loggedIn;
  // document.cookie = "hello=user";
  //let user = document.cookie;
  let user = getCookie("user");
  console.log(user);
  if(user==null){
    loggedIn = false;
    console.log("Not logged in");
    display_login();
  }
  else{
    loggedIn = true;
  }
  // Make navbar

  // ask server for forum

}


function nav_bar(){
  let body = document.getElementsByTagName('body');

}


function display_login(){
  var body = document.getElementsByTagName("body")[0];
  var login_box = document.createElement("div");
  login_box.className = "login_box";
  var entry = document.createElement("input");
  var login_box_text = document.createElement("div");
  login_box_text.className = "login_box_text";
  login_box_text.innerHTML = "Login";
  body.appendChild(login_box);
  login_box.appendChild(login_box_text);
}

function getCookie(name) {
  let ret = null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) ret =  parts.pop().split(';').shift();
  return ret;
}
