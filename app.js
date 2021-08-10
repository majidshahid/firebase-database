function senddata(){
    var name = document.getElementById("name");
    var roll = document.getElementById("roll");
var email=document.getElementById('Email');
var password= document.getElementById('password');
    var student={
        name :name.value,
        roll:roll.value,
        email:email.value,
        password:password.value,

    }
console.log(student)
   firebase.database().ref('student').push(student)
}


function login (){
    
}