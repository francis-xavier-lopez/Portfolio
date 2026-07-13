// ===============================
// Smooth Active Navbar
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ===============================
// Navbar Background
// ===============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.background = "rgba(10,15,30,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";

    }else{

        header.style.background = "rgba(10,15,30,.75)";
        header.style.boxShadow = "none";

    }

});


// ===============================
// Back To Top Button
// ===============================

const button = document.createElement("button");

button.innerHTML = "↑";

button.id = "topBtn";

document.body.appendChild(button);

button.style.position="fixed";
button.style.right="25px";
button.style.bottom="25px";
button.style.width="55px";
button.style.height="55px";
button.style.borderRadius="50%";
button.style.border="none";
button.style.background="#2563EB";
button.style.color="white";
button.style.fontSize="22px";
button.style.cursor="pointer";
button.style.display="none";
button.style.boxShadow="0 10px 25px rgba(37,99,235,.4)";
button.style.zIndex="999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){
        button.style.display="block";
    }else{
        button.style.display="none";
    }

});

button.onclick=()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

};


// ===============================
// Fade Skill Cards
// ===============================

const cards=document.querySelectorAll(".skill-card");

cards.forEach((card,index)=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";

    setTimeout(()=>{

        card.style.transition=".7s";
        card.style.opacity="1";
        card.style.transform="translateY(0)";

    },index*120);

});


// ===============================
// Typing Effect
// ===============================

const titles = [
    "Python Full Stack Developer",
    "Django Developer",
    "AI Enthusiast",
    "Web Developer"
];

const heading = document.querySelector(".hero h3");

let titleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    let current = titles[titleIndex];

    if(!deleting){

        heading.textContent = current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }else{

        heading.textContent = current.substring(0,charIndex--);

        if(charIndex==0){

            deleting=false;

            titleIndex++;

            if(titleIndex>=titles.length){

                titleIndex=0;

            }

        }

    }

    setTimeout(typeEffect,deleting?50:100);

}

typeEffect();


// ===============================
// Button Hover Animation
// ===============================

document.querySelectorAll(".btn1,.btn2").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-5px) scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0)";

    });

});