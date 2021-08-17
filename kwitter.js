function add_user(){
    username = document.getElementById("name_input").value;
    localStorage.setItem("username",username);
    console.log(username);
    window.location="kwitter_room.html";
}