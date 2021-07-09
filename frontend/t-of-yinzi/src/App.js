import './App.css';
import React from "react";
import {Helmet} from "react-helmet";
import MovingBackground from './UI/Background';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import { Navigation, Home, Bio } from "./components";




function App() {
    return (
        <div>
            <Router>
                <MovingBackground/>
                <Navigation />
                <Switch>
                    <Route path="/" exact component={() => <Home />} />
                    <Route path="/Bio" exact component={() => <Bio />} />
                </Switch>
            </Router>
            <Helmet>
                <title>Yinzi Zhou| Home</title>
            </Helmet>

        </div>
    );
}

export default App;
