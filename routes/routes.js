const axios = require('axios');
const convert = require('xml-js');
const API_KEY = require('../config/keys').GOODREADS_API_KEY;

module.exports = (app) => {
  app.get('/books/:id', async (req, res) => {
    const url = `https://www.goodreads.com/search/index.xml?key=${API_KEY}&q=${req.params.id}`;
    const books = await axios.get(url);
    let json = convert.xml2json(books.data, {compact: true, spaces: 4});

    res.send(json);
  })


};