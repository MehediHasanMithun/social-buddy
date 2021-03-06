import './App.css';
import Home from './Components/Home/Home';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import PostDetails from './Components/PostDetails/PostDetails';
import NotFound from './Components/NotFound/NotFound';
function App() {
  return (
    <div className="App">
     <Router>
      <Switch>
        <Route path="/home">
            <Home/>
        </Route>
        <Route path='/post/:id'>
          <PostDetails/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="*">
         <NotFound/>
        </Route>
      </Switch>
     </Router>
    </div>
  );
}

export default App;
