import axios from "axios";

export default {
  // Gets all books
  getSaved: function () {
    return axios.get("https://google-books-server.herokuapp.com/api/books");
  },
  // Gets the book with the given id
  searchBook: function (search) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("https://google-books-server.herokuapp.com/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("https://google-books-server.herokuapp.com/api/books", bookData);
  }
};
