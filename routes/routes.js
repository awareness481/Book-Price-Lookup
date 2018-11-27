const axios = require("axios");

module.exports = app => {
  app.get("/api/books/:id", async (req, res) => {
    const url = `http://openlibrary.org/search.json?q=${req.params.id}`;
    const books = await axios
      .get(url)
      .then(res => res.data.docs)
      .then(res => {
        return res.map(book => {
          return {
            id: book.libraryanything,
            title: book.title_suggest,
            author: book.author_name,
            year: book.first_publish_year,
            isbn: book.isbn,
            subjects: book.subject
          };
        });
      });
    console.log(books);
    res.send(books);
  });
};
