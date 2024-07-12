class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.read = false;
  }

  getTitle() {
    return this.title;
  }

  getAuthor() {
    return this.author;
  }
  markAsRead() {
    this.read = !this.read;
  }
  isRead() {
    return this.read;
  }
}
