import Store from './store.js';

export default class UI {
  static displayBooks() {
    // eslint-disable-next-line no-use-before-define
    const books = Store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('div');
    row.setAttribute('id', 'row');
    row.innerHTML = `
      <p class="row-btn">${book.title} by ${book.author}</p>
      <p class="row-btn">${book.isbn}</p>
      <input class ="button delete" type="submit" value="Remove">
    `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#btitle').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}