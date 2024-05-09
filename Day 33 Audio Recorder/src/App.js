import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './components/Home';
import AboutPage from './components/About';
import CoursesPage from './components/Courses';
import ContactPage from './components/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
         </Switch>
    </Router>
  );
}

export default App;
