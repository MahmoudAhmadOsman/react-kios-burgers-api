import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomeScreen from "./screens/HomeScreen";
import About from "./components/About";
import CartScreen from "./screens/CartScreen";
import Footer from "./components/Footer";
import BurgerScreen from "./screens/BurgerScreen";
import LoginScreen from "./screens/LoginScreen";

function App() {
	return (
		<Router>
			<section className="app">
				<Navigation />
				<div className="home_container">
					<Switch>
						<Route path="/burger/:id" component={BurgerScreen}></Route>
						<Route path="/cart/:id?" component={CartScreen}></Route>
						<Route path="/about" component={About}></Route>
						<Route path="/login" component={LoginScreen}></Route>
						<Route path="/" component={HomeScreen} exact={true}></Route>
					</Switch>
				</div>
			</section>
			<Footer />
		</Router>
	);
}

export default App;
