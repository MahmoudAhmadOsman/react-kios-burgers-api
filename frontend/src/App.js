import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/Footer";
import BurgerScreen from "./screens/BurgerScreen";

function App() {
	return (
		<Router>
			<section className="app">
				<Navigation />
				<div className="home_container">
					<Switch>
						<Route path="/burger/:id" component={BurgerScreen}></Route>
						<Route path="/" component={HomeScreen} exact={true}></Route>
					</Switch>
				</div>
			</section>
			<Footer />
		</Router>
	);
}

export default App;
