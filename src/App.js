import "./App.css";
import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import RegModal from "./components/RegModal";
import Navigation from "./components/Navigation";
import ScrollIcon from "./components/ScrollIcon";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	const dynamicsSection = useRef(null);

	return (
		<Router>
			<div className="App">
				<Navigation />
				<ScrollIcon />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/register" component={RegModal} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
