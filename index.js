import Book from './modules/constructor.js';
import UI from './modules/ui.js';
import Store from './modules/store.js';

// eslint-disable-next-line max-classes-per-file
const { luxon } = window;
const dt = luxon.DateTime.now();

document.getElementById('date-time').innerHTML = dt;

document.addEventListener('DOMContentLoaded', UI.displayBooks);

document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#btitle').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;
  const book = new Book(title, author, isbn);

  UI.addBookToList(book);

  Store.addBook(book);

  UI.clearFields();
});

document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);

  Store.removeBook(e.target.previousElementSibling.textContent);
});

const bookList = document.querySelector('#book-list');
const listHead = document.querySelector('.list-head');
const bookForm = document.querySelector('#book-form');
const addBookTitle = document.querySelector('.add-book-title');
const contactInfo = document.querySelector('.contact-info');

const Toogle = () => {
  bookList.style.display = 'block';
  bookForm.style.display = 'none';
  addBookTitle.style.display = 'none';
  listHead.style.display = 'block';
  contactInfo.style.display = 'none';
};

document.querySelector('#List').addEventListener('click', () => {
  Toogle();
});

const addToogle = () => {
  bookList.style.display = 'none';
  bookForm.style.display = 'flex';
  addBookTitle.style.display = 'block';
  listHead.style.display = 'none';
  contactInfo.style.display = 'none';
};

document.querySelector('#add-new').addEventListener('click', () => {
  addToogle();
});

const contactToogle = () => {
  bookList.style.display = 'none';
  bookForm.style.display = 'none';
  addBookTitle.style.display = 'none';
  contactInfo.style.display = 'block';
  listHead.style.display = 'none';
};

document.querySelector('#contact').addEventListener('click', () => {
  contactToogle();
});
