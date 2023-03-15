let text = "Frontend developer...";
let i = 0;
let speed = 150;

function type() {
  if (i < text.length) {
    document.querySelector(".container__hello-profession").textContent +=
      text.charAt(i);
    i++;
    setTimeout(type, speed);
  }
}
type();
const works = document.querySelector(".works__stack");
const worksStack = document.querySelectorAll(".works__category");
const allCategory = document.querySelectorAll(".all");
for (let i = 0; i < worksStack.length; i++) {
  worksStack[i].addEventListener(
    "click",
    filterCategory.bind(this, worksStack[i])
  );
}

function filterCategory(item) {
  changeActivePosition(item);
  for (let i = 0; i < allCategory.length; i++) {
    if (allCategory[i].classList.contains(item.attributes.id.value)) {
      allCategory[i].style.display = "block";
    } else {
      allCategory[i].style.display = "none";
    }
  }

  function changeActivePosition(activeItem) {
    for (let i = 0; i < worksStack.length; i++) {
      allCategory[i].classList.remove("active");
    }
    activeItem.classList.add("active");
  }
}

let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".block");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});
