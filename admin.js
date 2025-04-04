 function toggle(event){

   event.preventDefault();
    var sidenav = document.getElementById("sidenav") ; //  side nav fatch 
    var topnev = document.getElementById("topnev");
    var section = document.getElementById("section");
   var width = sidenav.style.width;
   if (width == '0px'){
      sidenav.style.width = '250px'
      sidenav.style.transition = '1s'
      topnev.style.marginLeft = '250px'
      topnev.style.width = "100%"
      topnev.style.transition = '1s'
      section.style.marginLeft = '250px'
      section.style.width = "100%"
      section.style.transition = '1s'
   }
   else{
      sidenav.style.width ='0px'
      sidenav.style.transition = '1s'
      topnev.style.marginLeft = '0px'
      topnev.style.width = "100%"
      topnev.style.transition = '1s'
      section.style.marginLeft = '0px'
      section.style.width = "100%"
      section.style.transition = '1s'

   }
   
 }

 function tab( activeBtn, inActiveBtn, activeId , inactiveId){
 var active = document.getElementById(activeId);
  let inActive = document.getElementById(inactiveId);
  active.style.display = "block";
   inActive.style.display = "none";

 
// Get the active and inactive buttons
let activeButton = document.getElementById(activeBtn);
let inActiveButton = document.getElementById(inActiveBtn);

// Change the background and text color for the active button
activeButton.style.backgroundColor = "rgb(201, 102, 2)";
activeButton.style.color = "rgb(255, 255, 255)";

// Change the background and text color for the inactive button
inActiveButton.style.backgroundColor = "white";
inActiveButton.style.color = "black";



  }

  function registernow(event){
   event.preventDefault();
   let form = document.forms.registerform;
// console.log(form);
let fullname = form.elements.fullname;
let email = form.elements.email;
let password = form.elements.password;

// console.log(fullname.value,email.value,password.value)
  
         //  niche code form validation ke liye use kr rhe form complete fill hona chiye
if(fullname.value.length == 0){
   alert(" full name is requrid !")
   fullname.style.borderColor = "red"
} 

if(password.value.length == 0){
   alert(" password is requrid !")
   password.style.borderColor = "red"
}
if(email.value.length == 0){
   alert("email is requrid !")
   email.style.borderColor = "red"
}

   
  }
    

function inputVelidation(input){

// input.style.borderColor = "#black"
// input.style.borderColor = "green"

   //problem solve nhi ho rhi h 
}
