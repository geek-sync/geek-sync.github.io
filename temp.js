 var rootRef = firebase.database();
     
    //creates ref for node
   var ref=rootRef.ref('Data/')
   ref.on('value',function(snapshot){
   var data= snapshot.val()
    document.getElementById("answer").innerHTML += data.temp + "&degC";
        
   });