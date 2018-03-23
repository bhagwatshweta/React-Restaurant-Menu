import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <button type="button"><Link to="/">Home</Link></button>
      <button type="button"><Link to="/Menu">Menu</Link></button>
      <Route exact path="/" component={Home} />
      <Route path="/Menu" component={Menu}/>
      </div>
      </Router>
    );
  }
}

export default App;
