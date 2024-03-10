import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import Home from './Pages/Home.js'
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom/cjs/react-router-dom';





function App() {
  return (
    <>
    <Router>
    <Switch>
      <Route exact path="/"  component={Home} />
    </Switch>
  </Router>
    </>
  );
}
 



export default App;
