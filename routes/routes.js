const axios = require('axios');
const convert = require('xml-js');
const API_KEY = require('../config/keys').GOODREADS_API_KEY;

module.exports = (app) => {
  app.get('/api/books/:id', async (req, res) => {
    const url = `https://www.goodreads.com/search/index.xml?key=${API_KEY}&q=${req.params.id}`;
    const books = await axios.get(url);
    let json = convert.xml2json(books.data, {compact: true, spaces: 4});

    // let data = [];
    // for (let i = 0; i < 20; i++) {
    //   data[i] = {
    //     title: json["GoodreadsResponse"]["search"]["results"]["work"][i].title._text,
    //     year: json["GoodreadsResponse"]["search"]["results"]["work"][i].original_publication_year._text,
    //   }
    // }

    res.send(json);
  })


};