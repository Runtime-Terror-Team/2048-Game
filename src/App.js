import BoardView from "./components/Board";
import React from "react";
import TipsTricks from "./pages/Tips&Tricks";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import GamePage from "./pages/GamePage";

function App() {
        return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <GamePage/>
                </Route>
                <Route exact path='/tipstricks'>
                    <TipsTricks/>
                </Route>
            </Switch>
        </Router>

    );
}

export default App;
