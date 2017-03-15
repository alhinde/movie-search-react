import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Search from './search'
import './index.css';
import { Router, Route, browserHistory} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render((
    <MuiThemeProvider>
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                </Route>
                <Route path="search/:result" component={Search} />
            </Router>
    </MuiThemeProvider>
), document.getElementById('root'))