import React from "react";

const Results = props => {
  const results = props.data;
  let books = results.map(book => {
    return (
      <div className="row" key={book.id}>
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{book.title}</span>
              <p>Author: {book.author}</p>
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
