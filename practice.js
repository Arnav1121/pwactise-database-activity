var firebaseConfig = {
    apiKey: "AIzaSyBuSRJ8OlsX0aFiw9ER8cN3smYmv3UVOxg",
    authDomain: "pwactice-activity.firebaseapp.com",
    databaseURL: "https://pwactice-activity-default-rtdb.firebaseio.com",
    projectId: "pwactice-activity",
    storageBucket: "pwactice-activity.appspot.com",
    messagingSenderId: "668285790792",
    appId: "1:668285790792:web:4c72434aeca23e3d26067d",
    measurementId: "G-9NMPMEPFYZ"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
username=document.getElementById("NameUser").value    ;
firebase.database().ref("/").child(username).update({
purpose:"addinguser"
});
}