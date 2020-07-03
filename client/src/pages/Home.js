import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import AllMovies from '../components/AllMovies';

export class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Jumbotron/>
                <AllMovies/>
            </React.Fragment>
        )
    }
}

export default Home
