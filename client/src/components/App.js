import React, { Component } from 'react';
import Results from './Results';


class App extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    fetch(`/api/books/${this.state.value}`)
      .then(data => data.json())
      .then(data  => {
        data = data['GoodreadsResponse']['search']['results']['work'];
        data = data.map((res) => {
          return {
            id: res.id._text,
            title: res.best_book.title._text,
            name: res.best_book.author.name._text,
            year: res.original_publication_year._text,
          }
        });
        return data;
      })
      .then(data => this.setState({data}))
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      data: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div className="App">
          <div className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <form onSubmit={this.handleSubmit}>
                  <input type="text" value={this.state.value} onChange={this.handleChange} />
                </form>
              </div>
            </div>
          </div>
          <div className='results'>
            <Results data={this.state.data} />
          </div>
      </div>
    );
  }
}

export default App;
