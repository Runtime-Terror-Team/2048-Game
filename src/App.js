import BoardView from "./components/Board";
import React from "react";
<<<<<<< HEAD
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
=======
import Front from "./Front-pg/Front.jsx";


function App() {
  return (
    <div className="App">
      <Front />
      <BoardView />
    </div>
  );
>>>>>>> b16ce532dcab670955af8ddc58d7b02cc510a52b
}

export default App;
