import React, { Component } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';

class App extends Component {
    constructor() {
        super()
        this.State = {
            robots: [],
            Searchfield: ''
        }
    }
    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }

    onSearchChange = (event) => {
        this.setState({ Searchfield: event.target.value })
    }

    render() {
        const {robots,Searchfield} = this.State; 
        const filteredRobots = robots.filter(robot => {
            return robots.name.toLowerCase().includes(Searchfield.toLowerCase())
        })
         return !robots.length ?  //advanced if else statement
                 <h1>Loading</h1>   : 
                 (
                <div className='tc' >
                    <h1 className='f2'>Robofriends</h1>
                    <SearchBox SearchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
                 );
        }
    }


export default App;



