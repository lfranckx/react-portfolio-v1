import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/App.css';
import './styles/Vars.css';

import Navbar from './components/Navbar';
import Home from './components/pages/Home/Home';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import About from "./components/pages/About";

function App() {
  return (
      <>
        <Router>
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
        </Router>
      </>
  );
}

export default App;
