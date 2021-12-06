import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import data from "./data.json";
import Navigation from "./components/Navigation";
import Product from "./components/Product";
import HomeScreen from "./screens/HomeScreen";
import About from "./components/About";
import CartScreen from "./screens/CartScreen";
import Footer from "./components/Footer";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <Router>
      <section className="app">
        <Navigation />
        <div className="home_container">
          <Switch>
            <Route path="/burger/:id" component={ProductScreen}></Route>
            <Route path="/cart/:id?" component={CartScreen}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/" component={HomeScreen} exact={true}></Route>
          </Switch>
        </div>
      </section>
      <Footer />
    </Router>
  );
}

export default App;
