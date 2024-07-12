const formEl = document.forms['bookForm'];

const lib = new Library();

formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  const bookTitle = document.getElementById('bookTitle').value.trim();
  const booKkAuthor = document.getElementById('bookAuthor').value.trim();

  if (bookTitle && booKkAuthor) {
    const adderBook = new Book(bookTitle, booKkAuthor);

    //add book to Library class
    lib.addBook(adderBook);
    renderLibrary();
    document.getElementById('bookTitle').value = '';
    document.getElementById('bookAuthor').value = '';
  }
});

function markBookAsRead(index){
    lib.getBooks()[index].markAsRead()
    renderLibrary()
}



function removeBook(index){
    lib.removeBook(index)
    renderLibrary()
}

function renderLibrary() {
  const renderLib = document.querySelector('ul#renderedLibrary');
  const bookCountEl = document.querySelector('#bookCount');

  bookCountEl.textContent = lib.bookCount();
  //resetting previous value
  renderLib.innerHTML = ' ';

  lib.getBooks().map((book,index) => {
    renderLib.innerHTML += `
      <li class="p-3 bg-yellow-100 rounded flex justify-between">
      <div class =" ${book.isRead() ? 'line-through' : ' '}"> ${
      book.getTitle()
    } by ${book.getAuthor()}</div>
      <di>
      <button class="px-2 py-1 bg-green-500 text-sm rounded text-white  " 
      onClick="markBookAsRead (${index})"
      >
      Mark as Reade
      </button>
      <button class="px-2 py-2 bg-red-500 text-sm rounded text-white"
      onClick="removeBook(${index})"
      >
      Remove
      </button>
      </di>
      </li>
      `;
  });
}
