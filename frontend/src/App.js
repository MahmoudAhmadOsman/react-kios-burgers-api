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
 
import About from "./components/About";
import CartScreen from "./screens/CartScreen";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
  <section className="app">
      <Navigation />
      <div className="home_container">
      <Switch>
        <Route path="/" component={Product} exact={true}></Route>
        <Route path="/cart/:id?" component={CartScreen}></Route>
        <Route  path="/about" component={About}></Route>
      </Switch>
       
      </div>
       
    </section>
    <Footer/>
</Router>
  );
}

export default App;
