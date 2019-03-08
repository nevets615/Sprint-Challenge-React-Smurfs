import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error));
    
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <Router>
      <div className="App">
        <SmurfForm />
        <Smurfs smurfs={this.state.smurfs} />
        <li> 
        <Link to="/">Smurfs</Link>
        </li>
        <li>
        <Link to="/smurf-form">SmurfsForm</Link>
        </li>
        <Route exact path="/" component={Smurfs} />
        <Route path="/smurf-form" component={SmurfForm} />
      </div>
      </Router>
    );
  }
}

export default App;
