import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import './App.css';
import 'core-js';
import {Link} from 'react-router';
import Request from 'superagent';
import _ from 'lodash';


class Search extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    componentWillMount() {
        this.apiCall()
    };

    updateApiCall() {
        let title = this.title.input.value;
        this.apiCall(title)
    }

    render() {
        var movies =_.map(this.state.movies, (movie) => {
            return <Link to={`/search/`+ movie.Title} style={{
                textDecoration: 'none',
            }}>
                <li id="movieList">{movie.Title}</li></Link>
        });
        return (
            <div>
                <div className="App">
                    <TextField hintText="Search movie" ref={(input) => {this.title = input;}} onChange={ () => {this.updateApiCall();}} fullWidth={true}/>
                    <div class="link"><ul>{movies}</ul></div>
                    {this.props.children}
                </div>
            </div>
        )
    }



    apiCall(title) {
        const url = 'http://www.omdbapi.com/?s=' + title + "*";
        Request.get(url).then((response) => {
            this.setState({
                movies: response.body.Search
            });
        });
    };


}

export default Search;
