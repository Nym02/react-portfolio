import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/resume" exact component={Resume} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
