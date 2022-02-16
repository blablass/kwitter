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
user_name = localStorage.getItem("username_key");
room_name = localStorage.getItem("roomname_key");
document.getElementById("room_name").innerHTML = "Room name : " + room_name;

function hmmmmmmmmm() {
      msg = document.getElementById("hmmmmmmmmm").value;
      firebase.database().ref(room_name).push({
            uname: user_name,
            msgg: msg,
            like: 1
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
                        console.log(firebase_message_id)
                        console.log(message_data)
                        user_name = message_data["uname"]
                        message = message_data["msgg"]
                        like = message_data["like"]
                        name_tag = "<h4>" + user_name + "<img src = 'tick.png' class = 'user_tick'> </h4>"
                        message_tag = "<h4 class = 'message_h4'>" + message + "</h4>"
                        like_but = "<button class = 'btn btn-warning' id = " + firebase_message_id + "value = " + like + " onclick='updatelike(this.id)'>"
                        span_tag = "<span class = 'glyphicon glyphicon-thumbs-up'> like:" + like + "</span> </button> <hr>"
                        row = name_tag + message_tag + like_but + span_tag;
                        document.getElementById("output").innerHTML += row;
                  }
            });
      });
}

function updatelike(msg_id) {
      console.log(msg_id)
      likee = document.getElementById(msg_id).value
      new_like = Number(likee) + 1
      firebase.database().ref(room_name).child(msg_id).update({
            like: new_like
      });




}

function logout() {
      localStorage.removeItem("username_key");
      localStorage.removeItem("roomname_key");
      window.location = "index.html";
}
getData();