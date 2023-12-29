import React, {Component} from 'react';
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import './app.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.cypress.io/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter(r => {
            return r.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });

        if (this.state.robots.length === 0) {
            return <h1 className='white tc'>No user. Please insert a user.</h1>
        } else {
            return (
                <div className='tc code'>
                    <h1 className='white f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;