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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("Room_name");
      localStorage.removeItem("username");
      window.location="index.html";


}
function sendMessage(){
      msg = document.getElementById("msg").value;
      
      firebase.database().ref(room_name).push({
            username:username,
            message:msg,
            like:0
      }
            
      );


      document.getElementById("msg").value="";
}
room_name=localStorage.getItem("Room_name");
username=localStorage.getItem("Username");