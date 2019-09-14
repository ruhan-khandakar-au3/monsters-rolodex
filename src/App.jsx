import React, { Component } from "react";

import CardList from "./components/card-list/CardList";

import "./App.css";
import SearchBox from "./components/search-box/SearchBox";

class App extends Component {
  state = {
    monsters: [],
    searchField: ""
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
      .catch(err => console.log(err));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { searchField, monsters } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField)
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          handleChange={this.handleChange}
          placeholder="Search Monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
