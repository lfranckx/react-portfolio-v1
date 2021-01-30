import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './components/styles/App.css';

import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import About from "./components/pages/About";
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Navbar />
        <main>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/resume' component={Resume} />
            <Route path='/contact' component={Contact} />
            <Route path={'/about'} component={About}/>
          </Switch>
        </main>
      </Switch>
    </Router>
  );
}

export default App;
