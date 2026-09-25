import { myLibrary, Book, mockRecommendations } from "./library.js";
/*################################*/
/*#######  HTML ELEMENTS ########*/
/*################################*/
const userBooksEl = document.querySelector(".user-books");
const recommendationsEl = document.querySelector(".recommendations");
let bookHtml = "";
myLibrary.forEach(({ title, author, pages, cover }) => {
  bookHtml += `
  <div class="book">
          <div class="book-image">
          <img src="${cover}" alt="book cover"/>
          </div>
          <div class="book-details">
            <h3 class="book-title">${title}</h3>
            <p class="book-author">${author}</p>
            <p class="book-pages">
              Page Count: <span class="page-count">${pages} pp.</span>
            </p>
            <div class="read-status badge-unread">Unread</div>
            <button class="read-btn">Read Now</button>
          </div>
          <div class="book-actions">
         
          <span class="material-symbols-outlined">
done_all
</span>
 <span class="material-symbols-outlined"> delete </span>
        </div>
        </div>
`;
});
userBooksEl.innerHTML = bookHtml;
let recommendedBookHtml = "";
mockRecommendations.forEach(({ title, author, pages, cover }) => {
  recommendedBookHtml += `
  <div class="recommended-book">
          <div class="recommended-book-image">
           <img src="${cover}" alt="book cover"/>
           </div>
          <div class="recommended-book-details">
            <h3 class="recommended-book-title">${title}</h3>
            <p class="recommended-book-author">${author}</p>
            <p class="recommended-book-pages">
              Page Count: <span class="page-count">${pages} pp.</span>
            </p>
            <div class="recommended-read-status badge-read">Read</div>
            <button class="recommended-read-btn">Read </button>
          </div>
           <div class="recommended-book-actions">
         
          <span class="material-symbols-outlined">
done_all
</span>
 <span class="material-symbols-outlined"> delete </span>
        </div>
  </div>
`;
});
document.querySelector(".recommendations").innerHTML = recommendedBookHtml;
