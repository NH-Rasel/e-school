import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound/NotFound';
import AboutUs from './components/AboutUs/AboutUs';
import Teachers from './components/Teachers/Teachers';
import Courses from './components/Courses/Courses';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/teachers">
            <Teachers />
          </Route>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>

  );
}

export default App;
