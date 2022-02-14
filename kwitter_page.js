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
user_name =localStorage.getItem("username_key");
room_name =localStorage.getItem("roomname_key");
document.getElementById("room_name").innerHTML = "Room name : " + room_name;
function hmmmmmmmmm(){
      msg = document.getElementById("hmmmmmmmmm").value;
      firebase.database().ref(room_name).push({
            uname : user_name,
            msgg : msg,
            like : 1
      });
      document.getElementById("hmmmmmmmmm").value = ""
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        
                  }
            });
      });
}
function logout(){
      localStorage.removeItem("username_key");
      localStorage.removeItem("roomname_key");
      window.location = "index.html";
}
getData();