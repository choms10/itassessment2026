// ==============================
// HERO IMAGE SLIDER
// ==============================

let images = [

"images/hero1.jpg",
"images/hero2.jpg",
"images/hero3.jpg"

];

let current = 0;

let slider = document.getElementById("slider");

if(slider){

setInterval(function(){

current++;

if(current >= images.length){

current = 0;

}

slider.src = images[current];

},3000);

}

// ==============================
// CONTACT FORM VALIDATION
// ==============================

let contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(event){

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let phone = document.getElementById("phone").value.trim();
let subject = document.getElementById("subject").value.trim();
let message = document.getElementById("message").value.trim();

if(name===""){

alert("Please enter your full name.");
event.preventDefault();
return;

}

if(email===""){

alert("Please enter your email address.");
event.preventDefault();
return;

}

if(!email.includes("@") || !email.includes(".")){

alert("Please enter a valid email.");
event.preventDefault();
return;

}

if(phone.length<10){

alert("Please enter a valid phone number.");
event.preventDefault();
return;

}

if(subject===""){

alert("Please enter a subject.");
event.preventDefault();
return;

}

if(message===""){

alert("Please enter your message.");
event.preventDefault();
return;

}

alert("Thank you for contacting Prodigy! We will get back to you soon.");

event.preventDefault();

});

}
document.getElementById("contactForm").addEventListener("submit", function(event){

    event.preventDefault();


    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;


    if(name == "" || email == "" || message == ""){

        alert("Please fill all required fields.");

    }

    else{

        alert("Thank you " + name + "! Your message has been sent.");

        this.reset();

    }

});