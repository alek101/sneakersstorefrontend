import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Purchase from './components/Purchase';
import Past from './components/Past';
import {createStore} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {

  const [data, setData] = useState(null);
  // const [error, setError] =useState(null);
  const url='http://127.0.0.1:8000/api/products';

  useEffect(()=>{
      const abortController=new AbortController();
      fetch(url, {signal: abortController.signal})
      .then(res=>{
          if(!res.ok){
              throw Error(`Couldn't fetch the data`);
          }
          return res.json()
      })
      .then(res=>{
      //   console.log(res);
        setData(res);  
      })
      .catch(err=>console.log(err));

      // return () =>abortController.abort();
  },[])


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
