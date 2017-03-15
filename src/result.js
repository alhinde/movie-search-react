import React, { Component } from 'react';
import Request from 'superagent';
import './Result.css';



class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: {}
        };
    }

    componentWillMount() {
        this.apiCall(this.props.params.result);
        console.log(this.state.movies);
    };


    render() {
        return (
            <div>
                <div class="result">
                    <h1>{this.state.movies.Title}</h1>
                    <img src={this.state.movies.Poster} alt=""/>
                    <h3>Year:</h3><p>{this.state.movies.Year}</p>
                    <h3>Director:</h3><p>{this.state.movies.Director}</p>
                    <h3>Genre:</h3><p>{this.state.movies.Genre}</p>
                    <h3>Plot:</h3><p>{this.state.movies.Plot}</p>
                </div>
            </div>
        )
    }

    apiCall(title) {
        const url = 'http://www.omdbapi.com/?t=' + title + "*";
        Request.get(url).then((response) => {
            this.setState({
                movies: response.body,

            });
            console.log(response.body);
        });
    };

}
export default Result;