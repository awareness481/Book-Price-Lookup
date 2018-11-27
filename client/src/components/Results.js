import React from "react";

const Results = props => {
  const results = props.data;
  let books = results.map(book => {
    return (
      <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">{book.title}</span>
              <p>Author: {book.name}</p>
              <p>Published in {book.year}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div>{books}</div>;
};

export default Results;
