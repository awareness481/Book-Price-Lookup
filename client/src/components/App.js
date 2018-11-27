import React, { Component } from 'react';
import Results from './Results';


class App extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    fetch(`/api/books/${this.state.value}`)
      .then(data => data.json())
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
