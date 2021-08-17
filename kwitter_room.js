
var firebaseConfig = {
      apiKey: "AIzaSyD_oDh7mdwOXXL70BbVlhGAPHKTPp0TyzA",
      authDomain: "kwitter-17b6e.firebaseapp.com",
      databaseURL: "https://kwitter-17b6e-default-rtdb.firebaseio.com",
      projectId: "kwitter-17b6e",
      storageBucket: "kwitter-17b6e.appspot.com",
      messagingSenderId: "340884063027",
      appId: "1:340884063027:web:c7c2de831565bd106ff446"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names);
       row = "<h1 class='room_name' id='room_names_h1' onclick='redirecttoroomname(this.id)'>"+"#"+Room_names+"</h1><hr>";
      document.getElementById("output").innerHTML=row;
      });});}
getData();
function logout(){
      localStorage.removeItem("Room_name");
      localStorage.removeItem("username");
      window.location="index.html";

}
function addroom(){
      roomname=document.getElementById("room_id").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"Adding room name"
      });
      localStorage.setItem("Room_name",roomname);
      window.location="kwitterpage.html";

      
}

function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitterpage.html";
}
user_name=localStorage.getItem("username");
document.getElementById("name_h3").innerHTML="Welcome "+user_name+"!";