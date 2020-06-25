import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faRetweet, faHeart, faCheckCircle, faFilter, faArrowUp,
  faArrowDown, faSmile, faFrown, faMeh, faUser } from '@fortawesome/free-solid-svg-icons';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


// injectTapEventPlugin();
library.add(faTwitter, faRetweet, faHeart, faCheckCircle, faFilter, faArrowUp, faArrowDown, faSmile, faMeh, faFrown, faUser)
ReactDOM.render(<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}><App /></MuiThemeProvider>, document.getElementById("root"));


serviceWorker.unregister();
