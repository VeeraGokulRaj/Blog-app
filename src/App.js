import Navbar from './Navbar';
import Home from './Home';
import BlogDetails from './BlogDetails';
import './index.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from './Create';
import PageNotFound from './PageNotFound';

function App() {
  // //using dynamic variables
  // const ratting=7;  
  // const link="https://www.google.com";
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route  path="/create"> 
              <Create/>
            </Route>
            <Route path="/blogs/:id"> 
              <BlogDetails/>
            </Route>
            <Route path="*">
              <PageNotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
