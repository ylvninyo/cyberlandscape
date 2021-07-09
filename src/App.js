import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Navbar from './components/navbar'
import Home from './pages/Home'
import Careers from './pages/Careers'
import Analytics from './pages/Analytics';



class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className="App">
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/careers">
                            <Careers/>
                        </Route>
                        <Route path="/analytics">
                            <Analytics/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
