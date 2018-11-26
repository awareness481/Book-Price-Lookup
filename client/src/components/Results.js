import React from 'react';

const Results = (props) => {
  const results = props.data;
  let books = results.map(book => {
    return (
      <li>{book.title}, {book.name}, {book.year}</li>
    );
  })

  return (
    <ul>
      {books}
    </ul>
  );
}

export default Results;