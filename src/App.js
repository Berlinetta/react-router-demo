import './App.css';
import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import Dashboard from "./Dashboard";

class App extends Component {
    render() {
        return (
            <div className="App">
                <nav>
                    <Link to="/dashboard">Dashboard</Link>
                </nav>
                <div>
                    <Route path="/dashboard" component={Dashboard}/>
                </div>
            </div>
        );
    }
}

export default App;
