const firebaseConfig = {
    apiKey: "AIzaSyAVi0lHa3X-QLMMlI6E0u3pOXsnQDQLBpY",
    authDomain: "exexele.firebaseapp.com",
    databaseURL: "https://exexele-default-rtdb.firebaseio.com",
    projectId: "exexele",
    storageBucket: "exexele.appspot.com",
    messagingSenderId: "994195416002",
    appId: "1:994195416002:web:30b7311296b7dee820ac5b"
};
firebase.initializeApp(firebaseConfig)

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "bem-vindo ao XX," + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "Adicionando sala"


    });
    localStorage.setItem("room_name", room_name);
    window.location = "XX_page.html"
}

function getData() {
    firebase.database().ref("/").on("value", function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            room_names = childKey;
            console.log("Nome da sala" + room_names);
            row = "<div class='room_name' id=" + room_names +
            "onclick ='redirectToRoomName(this.id)'># " + 
            room_names + "</div> <hr>";
            document.getElementById("output").innerHTML += row;
        });
    })
}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "XX_page.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}