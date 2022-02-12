import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import Footer from "./components/Footer";
import BurgerScreen from "./screens/BurgerScreen";
import About from "./components/About";
import CartScreen from "./screens/CartScreen";
import PaymentScreen from "./screens/PaymentScreen";
import RegisterScreen from "./screens/RegisterScreen";

function App() {
	return (
		<Router>
			<section className="app">
				<Navigation />
				<div className="home_container">
					<Switch>
						<Route path="/cart/:id?" component={CartScreen}></Route>
						<Route path="/burger/:id" component={BurgerScreen}></Route>
						<Route path="/payment" component={PaymentScreen}></Route>
						<Route path="/signin" component={LoginScreen}></Route>
						<Route path="/register" component={RegisterScreen}></Route>
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
