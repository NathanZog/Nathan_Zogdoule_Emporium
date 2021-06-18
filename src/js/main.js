let whitebtn = document.querySelectorAll("button")[0];
let txtsCarousel = Array.from(document.getElementsByClassName("txtCarousel"));
console.log(txtsCarousel)

whitebtn.addEventListener("click",()=>{
    document.body.style.backgroundColor = "white";
    document.querySelector("h1").style.color ="black";
    document.getElementById("nav").style.color = "black";
    document.querySelectorAll("button")[0].backgroundColor = "black";
    document.getElementsByClassName("titreSect3")[0].style.color = "black";
    document.getElementsByTagName("header")[0].style.backgroundColor = "white";
    document.getElementById("titreu").style.color ="black";
    txtsCarousel.forEach(element => {
        element.style.color = "black"
    });
})


let blackbtn = document.querySelectorAll("button")[1];

blackbtn.addEventListener("click",()=>{
    document.body.style.backgroundColor = "black";
    document.querySelector("h1").style.color ="white";
    document.getElementById("nav").style.color = "white";
    document.querySelectorAll("button")[0].backgroundColor = "white";
    document.getElementsByClassName("titreSect3")[0].style.color = "white";
    document.getElementsByTagName("header")[0].style.backgroundColor = "black";
    document.getElementById("titreu").style.color ="white";
    txtsCarousel.forEach(element => {
        element.style.color = "white"
    });
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
    popUp.style.opacity = "-1";
    popUp.style.zIndex = "-1";
});

let submit = document.getElementById("submit");

submit.addEventListener("click", ()=>{
    popUp.style.opacity = "-1";
    popUp.style.zIndex = "-1";
    alert("You are logged on.")
})
// popUp 2

let popUp2 = document.getElementById("popUp2");
let inscription = document.getElementById("inscription");


inscription.addEventListener("click", () =>{
    popUp2.style.opacity = "1";
    popUp2.style.zIndex = "4";
    popUp.style.opacity = "-1";
    popUp.style.zIndex = "-1";
});

let fermer2 = document.getElementById("fermer2");

fermer2.addEventListener("click", ()=>{
    popUp2.style.opacity = "-1";
    popUp2.style.zIndex = "-1";
});

let connexion2 = document.getElementById("connexion2")

connexion2.addEventListener("click",()=>{
    popUp2.style.opacity = "-1";
    popUp2.style.zIndex = "-1";
    popUp.style.opacity = "1";
    popUp.style.zIndex = "3";
})

let submit2 = document.getElementById("submit1");

submit2.addEventListener("click",()=>{
    popUp2.style.opacity = "0";
    popUp2.style.zIndex = "0";
    alert("You account has been succesfully created.")
});

// carousel 
let carosse = document.getElementById("sec");
let btn0 = document.getElementById("pos0");
let btn1 = document.getElementById("pos1");
let btn2 = document.getElementById("pos2");
let btn3 = document.getElementById("pos3");

btn1.addEventListener("click", ()=>{
    carosse.style.transform = "translateX(-360px)";
    carosse.style.overflow = "visible";
    carosse.style.transition = "ease 1s"
});
btn2.addEventListener("click", ()=>{
    carosse.style.transform = "translateX(-760px)";
    carosse.style.overflow = "visible";
    carosse.style.transition = "ease 1s";
});
btn3.addEventListener("click", ()=>{
    carosse.style.transform = "translateX(-1100px)";
    carosse.style.overflow = "visible";
    carosse.style.transition = "ease 1s"
});
btn0.addEventListener("click", ()=>{
    carosse.style.transform = "translateX(0px)";
    carosse.style.overflow = "visible";
    carosse.style.transition = "ease 1s"
});


let card = Array.from(document.querySelectorAll(".card"));
console.log(card);

let hover = Array.from(document.querySelectorAll(".conteneurHover"));
console.log(hover);







// card.forEach(element => {
//     element.addEventListener("mouseover",()=>{
//         hover.forEach(element => {
//             element.style.opacity = "1";
//         });
//     })
// });

// card.forEach(element => {
//     element.addEventListener("mouseout",()=>{
//         hover.forEach(element => {
//             element.style.opacity = "0";
//         });
//     })
// });




// let card1 = document.querySelector(".card");
// let hover1 = document.querySelector(".conteneurHover");

// card1.addEventListener("mouseover", ()=>{
//     hover1.style.opacity = "1";
// })

// card1.addEventListener("mouseout", ()=>{
//     hover1.style.opacity = "0";
// })

