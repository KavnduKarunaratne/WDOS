const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".navMenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");

})

document.querySelectorAll(".navLink").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
}))


// Donation Form

const msg = document.getElementsByClassName("tymsg");

msg.addEventListener("click", popup);

function popup(){
    alert("Thankyou for your donation.");
}

