function adduser(){
    username =document.getElementById("inputb").value;
    if(username != ""){
    localStorage.setItem("username_key",username);
    window.location = "kwitter_room.html";
    }else{
        alert("Add A name sir/mam.");
    }
}