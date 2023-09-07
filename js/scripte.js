let toggleBtn = document.querySelector("#toggleBtn");

let bodyEl = document.querySelector("body");


let darkMode = false;

toggleBtn.addEventListener('change', (event) => {
darkMode = event.target.checked;
if(darkMode) {
    bodyEl.classList.add("dark");
    document.images[0].src = "../img/Dark-logo.svg" ;
    show()


} else {
    bodyEl.classList.remove("dark");
    document.images[0].src = "../img/Light-logo.svg" ;
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