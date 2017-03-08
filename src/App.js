import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import './App.css';
import 'core-js';
import Search from './search';
import {Link} from 'react-router';
import Request from 'superagent';
import _ from 'lodash';


class App extends Component {
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
            return <a containerElement={<Link to="/search"/>}><li>{movie.Title}</li></a>
        });
        return (
            <div>
              <AppBar title="Movie Search" iconClassNameRight="muidocs-icon-navigation-expand-more"></AppBar>
              <div className="App">
                  <TextField hintText="Search movie" ref={(input) => {this.title = input;}} onChange={ () => {this.updateApiCall();}} fullWidth={true}/>
                  <ul>{movies}</ul>
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

export default App;
