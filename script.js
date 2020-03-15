window.onscroll = function() {
  myFunction();
};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

menu.addEventListener("click", event => {
  menu
    .querySelectorAll('a[href*="#"]')
    .forEach(el => el.classList.remove("active"));
  event.target.classList.add("active");
});

buttons.addEventListener("click", event => {
  buttons.querySelectorAll("span").forEach(el => el.classList.remove("active"));
  event.target.classList.add("active");
});
pictures.addEventListener("click", event => {
  pictures.querySelectorAll("img").forEach(el => el.classList.remove("active"));
  event.target.classList.add("active");
});

buttons.addEventListener("click", event => {
  pictures.querySelectorAll("img").forEach(el => el.classList.remove("active"));
  event.target.classList.add("active");
});

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });
}

const vertical = document.getElementById("vertical");
const horizontal = document.getElementById("horizontal");
const vertical_phone = document.getElementById("vertical_phone");
const horizontal_phone = document.getElementById("horizontal_phone");

let countScreenVertical = 0;
vertical_phone.addEventListener("click", () => {
  if (countScreenVertical % 2 == 0) {
    vertical.style.display = "none";
  } else vertical.style.display = "block";
  countScreenVertical++;
});
let countScreenHorizontal = 0;
horizontal_phone.addEventListener("click", () => {
  if (countScreenHorizontal % 2 == 0) {
    horizontal.style.display = "none";
  } else horizontal.style.display = "block";
  countScreenHorizontal++;
});
vertical.addEventListener("click", () => {
  if (countScreenVertical % 2 == 0) {
    vertical.style.display = "none";
  } else vertical.style.display = "block";
  countScreenVertical++;
});

horizontal.addEventListener("click", () => {
  if (countScreenHorizontal % 2 == 0) {
    horizontal.style.display = "none";
  } else horizontal.style.display = "block";
  countScreenHorizontal++;
});
const FORM_VALUES = { subject: "", textarea: "", author: "", email: "" };
const form = document.querySelector("#quote_form");
const formAuthorInput = document.querySelector("#author");
const formEmailInput = document.querySelector("#email");
const formSubjectInput = document.querySelector("#subject");
const formDescribeInput = document.querySelector("#text_area");

formAuthorInput.addEventListener("change", event => {
  FORM_VALUES[event.target.name] = event.target.value;
});

formEmailInput.addEventListener("change", event => {
  FORM_VALUES[event.target.name] = event.target.value;
});

formSubjectInput.addEventListener("change", event => {
  FORM_VALUES[event.target.name] = event.target.value;
});

formDescribeInput.addEventListener("change", event => {
  FORM_VALUES[event.target.name] = event.target.value;
});

form.addEventListener("submit", event => {
  event.preventDefault();
  alert(
    `Письмо отправлено
    ${FORM_VALUES.subject === "" ? "Без темы" : "Тема: " + FORM_VALUES.subject}
    ${
      FORM_VALUES.textarea === ""
        ? "Без описания"
        : "Описание: " + FORM_VALUES.textarea
    }
    `
  );
});

let slides = document.querySelectorAll("#slide");
console.log(slides);
let slider = [];
for (let i = 0; i < slides.length; i++) {
  slider[i] = slides[i];
  slides[i].remove();
}
console.log(slider);
let step = 0;
let offset = 0;

function draw() {
  let img = document.createElement("div");
  img = slider[step];
  img.classList.add("slide");
  img.style.left = offset * 1020 + "px";
  document.querySelector("#slider").appendChild(img);

  if (step + 1 == slider.length) {
    step = 0;
  } else {
    step++;
  }
  offset = 1;
}

function left() {
  document.querySelector("#arrowLeft").onclick = null;
  let slide2 = document.querySelectorAll(".slide");
  let offset2 = 0;
  for (let i = 0; i < slide2.length; i++) {
    slide2[i].style.left = offset2 * 1020 - 1020 + "px";
    offset2++;
  }
  setTimeout(function() {
    slide2[0].remove();
    draw();
    document.querySelector("#arrowLeft").onclick = left;
  }, 1000);
}

function right() {
  document.querySelector("#arrowRight").onclick = null;
  let slide2 = document.querySelectorAll(".slide");
  let offset2 = 0;
  for (let i = 0; i < slide2.length; i++) {
    slide2[i].style.left = offset2 * 1020 + 1020 + "px";
    offset2++;
  }
  setTimeout(function() {
    slide2[0].remove();
    draw();
    document.querySelector("#arrowRight").onclick = right;
  }, 1000);
}

draw();
draw();
document.querySelector("#arrowLeft").onclick = left;
document.querySelector("#arrowRight").onclick = right;
