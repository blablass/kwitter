var firebaseConfig = {
      apiKey: "AIzaSyAYbDikS8jz6a6q6yvVF1Gd18YiDaGvFuA",
      authDomain: "kwitter-9dc4f.firebaseapp.com",
      databaseURL: "https://kwitter-9dc4f-default-rtdb.firebaseio.com",
      projectId: "kwitter-9dc4f",
      storageBucket: "kwitter-9dc4f.appspot.com",
      messagingSenderId: "171183546650",
      appId: "1:171183546650:web:ef7d8110a31c3a731b4ca3",
      measurementId: "G-8QEBMXW02T"
};


firebase.initializeApp(firebaseConfig);
firenamev33_1 = localStorage.getItem("username_key")
document.getElementById("usernamev2").innerHTML = "WELCOME " + firenamev33_1 + " ^^";

function addroom() {
      room_name = document.getElementById("roomname").value
      localStorage.setItem("roomname_key", room_name)
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name?"
      });
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log(Room_names);
                  row = "<div class = 'room_name' id = '"+ Room_names +"' onclick = 'redirect(this.id)'> " + Room_names + 
                  " </div> <hr>";
                  document.getElementById("output").innerHTML += row;   

            });
      });
}

getData();
function redirect(currentroom)
{
 console.log(currentroom);
 localStorage.setItem("roomname_key",currentroom);
 window.location = "kwitter_page.html"
}
function logout(){
      localStorage.removeItem("username_key");
      localStorage.removeItem("roomname_key");
      window.location = "index.html";
}