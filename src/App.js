import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Layout from './components/Layout';
import { Home } from './components/Home';
import Contact from './components/Contact';
import { About } from './components/About';
import Work from './components/Work';
import Skill from './components/Skill';
import Login from './components/Login';
function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path="/skills" component={Skill} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;