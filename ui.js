document.querySelectorAll(".menu").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btn.classList.toggle("active");
    document.querySelector("nav").classList.toggle("reveal");
  });
});
let theme = "light";
const themeToggle = document.querySelector(".theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (theme === "light") {
    theme = "dark";
    themeToggle.innerHTML = `
      <span class="material-symbols-outlined">
wb_sunny
</span>
      `;
  } else if (theme === "dark") {
    theme = "light";
    themeToggle.innerHTML = `
    <span class="material-symbols-outlined">
bedtime
</span>
    `;
  }
});
const openModalEl = document.querySelectorAll(".open-modal");
const closeModalEl = document.querySelector(".close-modal");
const modalEl = document.querySelector(".modal");
function closeModal() {
  if (modalEl) modalEl.style.display = "none";
}
openModalEl.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (modalEl) modalEl.style.display = "block";
  });
});
closeModalEl.addEventListener("click", () => {
  closeModal();
});
import { myLibrary, Book, mockRecommendations } from "./library.js";
document.querySelector(".user-books").addEventListener("click", (e) => {});
