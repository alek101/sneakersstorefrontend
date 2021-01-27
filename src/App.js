import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Purchase from './components/Purchase';
import Past from './components/Past';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/purchase">
              <Purchase />
            </Route>
            <Route path="/past">
              <Past />
            </Route>
          </Switch>
        </div>  
      </div>
    </Router>
  );
}

export default App;
