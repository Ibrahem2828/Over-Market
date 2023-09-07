const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

let toggleBtn = document.querySelector("#toggleBtn");

let bodyEl = document.querySelector("body");


let darkMode = false;

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
  document.getElementById("dark-butt").style.left = "20px";
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
  document.getElementById("dark-butt").style.right = "20px";
});


toggleBtn.addEventListener('change', (event) => {
darkMode = event.target.checked;
if(darkMode) {
    bodyEl.classList.add("dark");
    
    show()


} else {
    bodyEl.classList.remove("dark");
    
    disply()
}
})
function show(){
    document.images[15].src = "../img/Light-logo.svg" ;
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "block";
}
function disply(){
    document.images[15].src = "../img/Dark-logo.svg" ;
    document.getElementById("div2").style.display = "none";
    document.getElementById("div1").style.display = "block";
}