export let myLibrary = [
  {
    id: "book-001",
    title: "Atomic Habits",
    author: "James Clear",
    isbn: "9780735211292",
    pages: 320,
    cover: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
    read: true,
    readLink: "https://example.com/atomic-habits",
  },
  {
    id: "book-002",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    isbn: "9780857197689",
    pages: 256,
    cover: "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg",
    read: false,
    readLink: "https://example.com/psychology-of-money",
  },
  {
    id: "book-003",
    title: "Deep Work",
    author: "Cal Newport",
    isbn: "9781455586691",
    pages: 304,
    cover: "https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg",
    read: true,
    readLink: "https://example.com/deep-work",
  },
  {
    id: "book-005",
    title: "1984",
    author: "George Orwell",
    isbn: "9780451524935",
    pages: 328,
    cover: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
    read: true,
    readLink: "https://example.com/1984",
  },
  {
    id: "book-006",
    title: "The Alchemist",
    author: "Paulo Coelho",
    isbn: "9780062315007",
    pages: 208,
    cover: "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg",
    read: false,
    readLink: "https://example.com/the-alchemist",
  },
];

export function Book(id, title, author, pages, cover, readStatus, readLink) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.cover = cover;
  this.readStatus = read;
  this.readLink = readLink;
}

export const mockRecommendations = [
  {
    id: "rec-001",
    title: "Essentialism",
    author: "Greg McKeown",
    pages: 272,
    cover: "https://covers.openlibrary.org/b/isbn/9780804137386-L.jpg",
  },
  {
    id: "rec-002",
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    pages: 464,
    cover: "https://covers.openlibrary.org/b/isbn/9781982137274-L.jpg",
  },
  {
    id: "rec-003",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    pages: 512,
    cover: "https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg",
  },
  {
    id: "rec-004",
    title: "Make Time",
    author: "Jake Knapp & John Zeratsky",
    pages: 304,
    cover: "https://covers.openlibrary.org/b/isbn/9780525536512-L.jpg",
  },
];
