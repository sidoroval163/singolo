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
vertical_phone.addEventListener("touchstart", () => {
  if (countScreenVertical % 2 == 0) {
    vertical.style.display = "none";
  } else vertical.style.display = "block";
  countScreenVertical++;
});
vertical_phone.addEventListener("click", () => {
  if (countScreenVertical % 2 == 0) {
    vertical.style.display = "none";
  } else vertical.style.display = "block";
  countScreenVertical++;
});
let countScreenHorizontal = 0;
horizontal_phone.addEventListener("touchstart", () => {
  if (countScreenHorizontal % 2 == 0) {
    horizontal.style.display = "none";
  } else horizontal.style.display = "block";
  countScreenHorizontal++;
});
horizontal_phone.addEventListener("click", () => {
  if (countScreenHorizontal % 2 == 0) {
    horizontal.style.display = "none";
  } else horizontal.style.display = "block";
  countScreenHorizontal++;
});
vertical.addEventListener("touchstart", () => {
  if (countScreenVertical % 2 == 0) {
    vertical.style.display = "none";
  } else vertical.style.display = "block";
  countScreenVertical++;
});
vertical.addEventListener("click", () => {
  if (countScreenVertical % 2 == 0) {
    vertical.style.display = "none";
  } else vertical.style.display = "block";
  countScreenVertical++;
});

horizontal.addEventListener("touchstart", () => {
  if (countScreenHorizontal % 2 == 0) {
    horizontal.style.display = "none";
  } else horizontal.style.display = "block";
  countScreenHorizontal++;
});
horizontal.addEventListener("click", () => {
  if (countScreenHorizontal % 2 == 0) {
    horizontal.style.display = "none";
  } else horizontal.style.display = "block";
  countScreenHorizontal++;
});

const tabs = document.getElementById("buttons");
const random = document.getElementById("pictures");

function Randomise() {
  return Math.random();
}
function rnd() {
  return Math.ceil(Randomise() * 100);
}
tabs.addEventListener("click", event => {
  random.querySelectorAll("div").forEach(el => (el.style.order = rnd()));
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
  quote_form
    .querySelectorAll("#author, textarea, #email, #subject")
    .forEach(el => (el.value = ""));
});

let items = document.querySelectorAll(".carousel .item");
let currentItem = 0;
let isEnabled = true;
console.log(items);
function changeCurrentItem(n) {
  currentItem = (n + items.length) % items.length;
}
console.log(currentItem);
function hideItem(direction) {
  isEnabled = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener("animationend", function() {
    this.classList.remove("activ", direction);
  });
}

function showItem(direction) {
  items[currentItem].classList.add("next", direction);
  items[currentItem].addEventListener("animationend", function() {
    this.classList.remove("next", direction);
    this.classList.add("activ");
    isEnabled = true;
  });
}

function nextItem(n) {
  hideItem("to-left");
  changeCurrentItem(n + 1);
  showItem("from-right");
}

function previousItem(n) {
  hideItem("to-right");
  changeCurrentItem(n - 1);
  showItem("from-left");
}

document.querySelector("#arrowLeft").addEventListener("click", function() {
  if (isEnabled) {
    previousItem(currentItem);
  }
});

document.querySelector("#arrowLeft").addEventListener("touchstart", function() {
  if (isEnabled) {
    previousItem(currentItem);
  }
});

document.querySelector("#arrowRight").addEventListener("click", function() {
  if (isEnabled) {
    nextItem(currentItem);
  }
});

document
  .querySelector("#arrowRight")
  .addEventListener("touchstart", function() {
    if (isEnabled) {
      nextItem(currentItem);
    }
  });

const swipedetect = el => {
  let surface = el;
  let startX = 0;
  let startY = 0;
  let distX = 0;
  let distY = 0;
  let startTime = 0;
  let elapsedTime = 0;

  let threshold = 150;
  let restraint = 100;
  let allowedTime = 300;
  surface.addEventListener(
    "mousedown",
    function(e) {
      startX = e.pageX;
      startY = e.pageY;
      startTime = new Date().getTime();
      e.preventDefault();
    },
    false
  );

  surface.addEventListener(
    "mouseup",
    function(e) {
      distX = e.pageX - startX;
      distY = e.pageY - startY;
      elapsedTime = new Date().getTime() - startTime;
      if (elapsedTime <= allowedTime) {
        if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
          if (distX > 0) {
            if (isEnabled) {
              previousItem(currentItem);
            }
          } else {
            if (isEnabled) {
              nextItem(currentItem);
            }
          }
        }
      }
      e.preventDefault();
    },
    false
  );

  surface.addEventListener(
    "touchstart",
    function(e) {
      if (
        e.target.classList.contains("arrow_") ||
        e.target.classList.contains("control")
      ) {
        if (e.target.classList.contains("back")) {
          if (isEnabled) {
            previousItem(currentItem);
          }
        } else {
          if (isEnabled) {
            nextItem(currentItem);
          }
        }
      }
      var touchobj = e.changedTouches[0];
      startX = touchobj.pageX;
      startY = touchobj.pageY;
      startTime = new Date().getTime();
      e.preventDefault();
    },
    false
  );

  surface.addEventListener(
    "touchmove",
    function(e) {
      e.preventDefault();
    },
    false
  );

  surface.addEventListener(
    "touchend",
    function(e) {
      var touchobj = e.changedTouches[0];
      distX = touchobj.pageX - startX;
      distY = touchobj.pageY - startY;
      elapsedTime = new Date().getTime() - startTime;
      if (elapsedTime <= allowedTime) {
        if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
          if (distX > 0) {
            if (isEnabled) {
              previousItem(currentItem);
            }
          } else {
            if (isEnabled) {
              nextItem(currentItem);
            }
          }
        }
      }
      e.preventDefault();
    },
    false
  );
};

const scroll = document.querySelectorAll('a[href^="#"]');

window.addEventListener("scroll", () => {
  console.log(pageYOffset);
  if (pageYOffset < 600) {
    menu.querySelectorAll("a").forEach(el => el.classList.remove("active"));
    scroll[0].classList.add("active");
  }
  if (pageYOffset > 600) {
    menu.querySelectorAll("a").forEach(el => el.classList.remove("active"));
    scroll[1].classList.add("active");
  }
  if (pageYOffset > 1050) {
    menu.querySelectorAll("a").forEach(el => el.classList.remove("active"));
    scroll[2].classList.add("active");
  }
  if (pageYOffset > 1900) {
    menu.querySelectorAll("a").forEach(el => el.classList.remove("active"));
    scroll[3].classList.add("active");
  }
  if (pageYOffset > 2500) {
    menu.querySelectorAll("a").forEach(el => el.classList.remove("active"));
    scroll[4].classList.add("active");
  }
});

var el = document.querySelector(".carousel");
swipedetect(el);
