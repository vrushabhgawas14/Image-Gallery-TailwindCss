let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");
let scrollContainer = document.querySelector("#gallery");

scrollContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollContainer.style.scrollBehavior = "auto";
  scrollContainer.scrollLeft += e.deltaY;
});

backBtn.addEventListener("click", goLeft);

nextBtn.addEventListener("click", goRight);

function goLeft() {
  scrollContainer.scrollLeft -= 1200;
  scrollContainer.style.scrollBehavior = "smooth";
}

function goRight() {
  scrollContainer.scrollLeft += 1200;
  scrollContainer.style.scrollBehavior = "smooth";
}
