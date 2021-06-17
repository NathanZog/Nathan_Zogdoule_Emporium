let whitebtn = document.querySelectorAll("button")[0];

whitebtn.addEventListener("click",()=>{
    document.body.style.backgroundColor = "white";
    document.querySelector("h1").style.color ="black";
    document.getElementById("nav").style.color = "black";
    document.querySelectorAll("button")[0].backgroundColor = "black";
    document.getElementsByClassName("titreSect3")[0].style.color = "black";
    document.getElementsByTagName("header")[0].style.backgroundColor = "white"
})


let blackbtn = document.querySelectorAll("button")[1];

blackbtn.addEventListener("click",()=>{
    document.body.style.backgroundColor = "black";
    document.querySelector("h1").style.color ="white";
    document.getElementById("nav").style.color = "white";
    document.querySelectorAll("button")[0].backgroundColor = "white";
    document.getElementsByClassName("titreSect3")[0].style.color = "white";
    document.getElementsByTagName("header")[0].style.backgroundColor = "black"
});


let navbar = document.getElementsByTagName("header")[0]
window.addEventListener("scroll", () =>{
    if(window.scrollY > 1){
        navbar.classList.add('scroll');
    }else {
        navbar.classList.remove('scroll')
    }
});

//mes bouttons  pour inscription


let connexion = document.getElementById("connexion");
;

let fermer = document.getElementById("fermer");
console.log(fermer);

let popUp = document.getElementById("popUp")




connexion.addEventListener("click", () =>{
    popUp.style.opacity = "1";
    popUp.style.zIndex = "3";
});

fermer.addEventListener("click", () =>{
    popUp.style.opacity = "0";
    popUp.style.zIndex = "0";
});

// popUp 2

let popUp2 = document.getElementById("popUp2");
let inscription = document.getElementById("inscription");


inscription.addEventListener("click", () =>{
    popUp2.style.opacity = "1";
    popUp2.style.zIndex = "4";
    popUp.style.opacity = "0";
    popUp.style.zIndex = "0";
});

let fermer2 = document.getElementById("fermer2");

fermer2.addEventListener("click", ()=>{
    popUp2.style.opacity = "0";
    popUp2.style.zIndex = "0";
});

let connexion2 = document.getElementById("connexion2")

connexion2.addEventListener("click",()=>{
    popUp2.style.opacity = "0";
    popUp2.style.zIndex = "0";
    popUp.style.opacity = "1";
    popUp.style.zIndex = "3";
})

let submit = document.getElementById("submit");

submit.addEventListener("click",()=>{
    popUp2.style.opacity = "0";
    popUp2.style.zIndex = "0";
    alert("You account has been succesfully created.")
})