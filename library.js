export let myLibrary = [];

export function Book(id, title, author, pages, cover, read, readLink) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.cover = cover;
  this.read = read;
  this.readLink = readLink;
}
