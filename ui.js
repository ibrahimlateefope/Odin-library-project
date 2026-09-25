document.querySelectorAll(".menu").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btn.classList.toggle("active");
    document.querySelector("nav").classList.toggle("reveal");
  });
});
