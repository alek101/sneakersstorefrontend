import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Purchase from './components/Purchase';
import Past from './components/Past';
import {createStore} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';
import useFetchData from './useFetchData';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {

  const {data} = useFetchData();


  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home data={data}/>
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
    </Provider>
  );
}

export default App;
