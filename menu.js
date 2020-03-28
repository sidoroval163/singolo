const arrmenu = document.querySelectorAll(".menu_element");
const ham = document.getElementById("ham");
const logo = document.querySelector(".logo");

let burgerStatus = 0;

ham.addEventListener("click", () => {
  if (burgerStatus == 0) {
    arrmenu.forEach(el => (el.style.display = "block"));
    menu.querySelector("ul").classList.add("ulclicked");
    menu.classList.add("clicked");
    logo.classList.add("active");
    ham.style.transform = "rotate(90deg)";
    setTimeout(() => (burgerStatus = 1), 500);
  }
});

menu.addEventListener("click", event => {
  if (burgerStatus == 1) {
    if (event.target.tagName !== "LI" && event.target.tagName !== "UL") {
      arrmenu.forEach(el => (el.style.display = "none"));
      menu.querySelector("ul").classList.remove("ulclicked");
      menu.classList.remove("clicked");
      logo.classList.remove("active");
      ham.style.transform = "rotate(0deg)";
      burgerStatus = 0;
    }
  }
});
