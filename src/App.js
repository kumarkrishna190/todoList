import React, { Component } from 'react';
import './App.css';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
      <div class="mw4 mw7-ns center bg-light-gray pa2 ph5-ns">
      <h1 class="mt10 tc light-pink f-headline lh-solid">todos</h1>
        <form className="App" onSubmit={this.onSubmit}>
          <input class="ma0 ph7 pa3 br2" value={this.state.term} onChange={this.onChange} placeholder="What need to be done?" />
        </form>
        <List class="f1" items={this.state.items} />
      </div>
    );
  }
}
export default App;