import React, { useState, useEffect } from 'react';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import './app.css';
import ErrorBoundary from "./ErrorBoundary";

function App() {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.cypress.io/users')
            .then(response => response.json())
            .then(users => {
                setRobots(users)
            });
    }, []);

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    };

    const filteredRobots = robots.filter(r => {
        return r.name.toLowerCase().includes(searchfield.toLowerCase())
    });

    return !robots.length ?
        <h1 className='white tc'>No user. Please create one.</h1> :
        (
            <div className='tc code'>
                <h1 className='white f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary fallback={<p>Something went wrong</p>}>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
}

export default App;