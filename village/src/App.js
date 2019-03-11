import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error));
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios
      .post("http://localhost:3333/smurfs", Smurfs)
      .then(res => {
        this.setState({
          name: "",
          age: "",
          height: ""
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div>
        <nav>
          <div className="nav-links">
            <NavLink exact to="/">
              Smurfs
            </NavLink>
            <NavLink to="/smurfs-form">SmurfForm</NavLink>
          </div>
        </nav>
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
      </div>
    );
  }
}

export default App;
