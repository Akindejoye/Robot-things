import React, { Component } from 'react';
import CardList from './cardList';
import SearchBox from './SearchBox';
import { robots } from './robots.js';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
             searchfield: ""
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() { 
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
                  <div className="tc">
                        <h1 className="f2">Robo Friends</h1>
                        <SearchBox searchChange={this.onSearchChange} />
                        <CardList robots={filteredRobots} />
                    </div>
        );
    }
}
export default App;