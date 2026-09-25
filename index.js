import { myLibrary, Book, mockRecommendations } from "./library.js";
import { renderBooks } from "./render.js";
/*################################*/
/*#######  HTML ELEMENTS ########*/
/*################################*/
const userBooksEl = document.querySelector(".user-books");
const recommendationsEl = document.querySelector(".recommendations");
renderBooks(userBooksEl, recommendationsEl);
const form = document.querySelector(".modal-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const titleInput = document.getElementById("modal-book-title").value;
  const authorInput = document.getElementById("modal-author").value;
  const readLink = document.getElementById("modal-link").value;
  const readStatus = document.querySelector(
    'input[name="modal-read"]:checked',
  ).value;
  try {
    const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(titleInput)}`;
    const response = await fetch(url);
    const data = await response.json();
    const bookData = data.docs?.[0] || {};
    const id = crypto.randomUUID();
    const title = bookData.title || titleInput;
    const author = bookData.author_name
      ? bookData.author_name[0]
      : authorInput
        ? authorInput
        : "Unknown author";
    const cover = bookData.cover_i
      ? `https://covers.openlibrary.org/b/id/${bookData.cover_i}-L.jpg`
      : "fallback-cover-url.jpg";
    const pages =
      bookData.number_of_pages_median || bookData.edition_count || 0;
    console.log(bookData);
    const newBook = new Book(
      id,
      title,
      author,
      pages,
      cover,
      readStatus,
      readLink,
    );
    closeModal();
    myLibrary.push(newBook);
    renderBooks(userBooksEl, recommendationsEl);
  } catch {
    console.error("Failed to fetch bookData:", error);
  }
});
