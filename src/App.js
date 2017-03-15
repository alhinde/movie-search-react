import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import './App.css';
import 'core-js';
import {Link} from 'react-router';

class App extends Component {
    render() {
        return (
            <div>
                <AppBar title="Movie Search" iconClassNameRight="muidocs-icon-navigation-expand-more">
                    <Link to={`/search`} style={{textDecoration: 'none',  }}>
                        <h4>Search Now</h4>
                    </Link>
                </AppBar>
                <div className="App">
                    {this.props.children}
                </div>
            </div>
        )
    }

}

export default App;