
var database = firebase.database();

var today = new Date(); 
var time = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear() + " " 
		+ today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var ref=database.ref('dustbin/')
   ref.on('value',function(snapshot){
   var data= snapshot.val()
    document.getElementById("answer").innerHTML = data.temperature;
        
   });
   
   var ref1=database.ref('dustbin/')
   ref1.on('value',function(snapshot){
   var data= snapshot.val()
    document.getElementById("dustbin_status").innerHTML = data.level;
    var leveldata=data.level
    if(leveldata == 100){
	
	alert("Dustbin is FULL!");
	
	var firebaseSendTime = firebase.database().ref().child("dustbin_history/" + "Full at " + time);
		firebaseSendTime.set("Full at " + time);
		
		setInterval(function(){ }, 10000);
	}
        
   });

function logout(){
		var c = confirm("Confirm sign out?");
	if(c == true){
	auth.signOut();	//logout (firebase authentication)
	window.location.href = "index.html";
	}
	else{
	window.location.href = "main.html"	
	}
}
