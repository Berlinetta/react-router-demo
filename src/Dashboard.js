import React, {Component} from 'react';
import {Route} from "react-router-dom";
import Invoice from "./Invoice";

class Dashboard extends Component {
    render() {
        return (
            <div className="App">
                this is content of dashboard
                <Route
                    path={this.props.match.url + '/invoice'}
                    component={Invoice}
                />
            </div>
        );
    }
}

export default Dashboard;
