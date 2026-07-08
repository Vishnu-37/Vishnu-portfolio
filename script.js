alert("Welcome to Vishnu's Portfolio!");
const text = "Full Stack Web Developer";

let index = 0;

function typing(){

if(index < text.length){

document.getElementById("typing").innerHTML += text.charAt(index);

index++;

setTimeout(typing,100);

}

}

typing();
const roles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Web Designer",
    "Computer Science Student"
];

let roleIndex = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;

function typeEffect() {

    const typing = document.getElementById("typing");

    currentRole = roles[roleIndex];

    if (!isDeleting) {
        typing.textContent = currentRole.substring(0, charIndex++);
    } else {
        typing.textContent = currentRole.substring(0, charIndex--);
    }

    let speed = 120;

    if (isDeleting) speed = 60;

    if (!isDeleting && charIndex === currentRole.length + 1) {
        isDeleting = true;
        speed = 1500;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();