let whitebtn = document.querySelectorAll("button")[0];
console.log(whitebtn);

whitebtn.addEventListener("click",()=>{
    document.body.style.backgroundColor = "white";
    document.querySelector("h1").style.color ="black";
    document.getElementById("nav").style.color = "black";
    document.querySelectorAll("button")[0].backgroundColor = "black";
    document.getElementsByClassName("titreSect3")[0].style.color = "black";
})


let blackbtn = document.querySelectorAll("button")[1];

console.log(blackbtn);

blackbtn.addEventListener("click",()=>{
    document.body.style.backgroundColor = "black";
    document.querySelector("h1").style.color ="white";
    document.getElementById("nav").style.color = "white";
    document.querySelectorAll("button")[0].backgroundColor = "white";
    document.getElementsByClassName("titreSect3")[0].style.color = "white";
})