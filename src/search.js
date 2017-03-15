import React, { Component } from 'react';
import Request from 'superagent';
import './Search.css';



class Search extends Component {
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
                <div class="Search">

                    <h1>{this.state.movies.Title}</h1>
                    <img src={this.state.movies.Poster} alt=""/>
                    <h4>Year:</h4><p>{this.state.movies.Year}</p>
                    <h4>Director:</h4><p>{this.state.movies.Director}</p>
                    <h4>Genre:</h4><p>{this.state.movies.Genre}</p>
                    <h4>Plot:</h4><p>{this.state.movies.Plot}</p>
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
export default Search;