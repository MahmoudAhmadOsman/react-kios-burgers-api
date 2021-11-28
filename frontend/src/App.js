import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
} from "react-router-dom";
import './App.css';

import Navigation from './components/Navigation';
import Product from './components/Product';
import HomeScreen from "./screens/HomeScreen";
import Cart from "./components/Cart"
import About from "./components/About";

function App() {
  return (
    <Router>
  <section className="app">
      <Navigation />
      <div className="home_container">
      <Switch>
         <Route exact path="/">
            {/* <HomeScreen/> */}
            <Product />
        </Route>
        <Route exact path="/cart"><Cart /></Route>
        <Route exact path="/about"><About /></Route>
      </Switch>
       
      </div>
       
    </section>
</Router>
  );
}

export default App;
