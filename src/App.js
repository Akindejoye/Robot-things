import React, { Component } from 'react';
import CardList from './cardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import { robots } from './robots.js';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
             searchfield: ""
        }
    }

    componentDidMount () {
        // this.setState( { robots:robots });
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(Response=> Response.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() { 
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (!this.state.robots.length) {
            return <h1>Loading</h1>
        } else {
            return (
                    <div className="tc">
                            <h1 className="f2">Robo Friends</h1>
                            <SearchBox searchChange={this.onSearchChange} />
                            <Scroll>
                                <ErrorBoundary>
                                    <CardList robots={filteredRobots} />
                                </ErrorBoundary>
                            </Scroll>
                        </div>
            );
        }
    }
}
export default App;